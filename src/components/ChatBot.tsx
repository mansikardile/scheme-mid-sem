import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  RotateCcw, 
  Award, 
  Clock, 
  Cpu, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ollamaService, type ChatMessage } from '../services/ollamaService';
import type { UserProfile, Scheme } from '../types';

interface ChatBotProps {
  userProfile?: UserProfile | null;
  onSelectScheme?: (scheme: Scheme) => void;
}

/**
 * Lightweight inline markdown renderer for bold, code, and links
 */
const renderInline = (str: string): React.ReactNode[] => {
  const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s)]+)/g;
  const parts = str.split(regex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={idx} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code key={idx} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const closeBracket = part.indexOf('](');
      const label = part.slice(1, closeBracket);
      const url = part.slice(closeBracket + 2, -1);
      return (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-0.5 mx-0.5"
        >
          <span>{label}</span>
          <ExternalLink className="w-2.5 h-2.5 inline" />
        </a>
      );
    }
    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-0.5 break-all mx-0.5"
        >
          <span>{part.replace(/^https?:\/\/(www\.)?/, '').slice(0, 32)}...</span>
          <ExternalLink className="w-2.5 h-2.5 inline shrink-0" />
        </a>
      );
    }
    return part;
  });
};

/**
 * Rich Block-level Markdown Formatter Component
 */
const FormattedMarkdown: React.FC<{ content: string; isUser?: boolean }> = ({ content, isUser }) => {
  if (isUser) {
    return <div className="leading-relaxed">{content}</div>;
  }

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: React.ReactNode[] } | null = null;

  const flushList = () => {
    if (currentList) {
      if (currentList.type === 'ul') {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-1.5 space-y-1 pl-0.5">
            {currentList.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div className="flex-1 text-slate-700 dark:text-slate-300">{item}</div>
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`list-${elements.length}`} className="my-1.5 space-y-1 pl-0.5">
            {currentList.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1 text-slate-700 dark:text-slate-300">{item}</div>
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h4 key={`h3-${i}`} className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mt-3 mb-1.5 flex items-center gap-1.5 border-b border-emerald-500/20 pb-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>{trimmed.replace(/^###\s+/, '')}</span>
        </h4>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h3 key={`h2-${i}`} className="text-sm font-black text-slate-900 dark:text-white mt-3 mb-1.5">
          {trimmed.replace(/^##\s+/, '')}
        </h3>
      );
    } else if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h2 key={`h1-${i}`} className="text-base font-black text-slate-900 dark:text-white mt-3.5 mb-2">
          {trimmed.replace(/^#\s+/, '')}
        </h2>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(renderInline(trimmed.replace(/^[-*]\s+/, '')));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(renderInline(trimmed.replace(/^\d+\.\s+/, '')));
    } else {
      flushList();
      elements.push(
        <p key={`p-${i}`} className="my-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          {renderInline(trimmed)}
        </p>
      );
    }
  }
  flushList();

  return <div className="space-y-0.5">{elements}</div>;
};

export const ChatBot: React.FC<ChatBotProps> = ({ userProfile, onSelectScheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOllamaReady, setIsOllamaReady] = useState<boolean | null>(null);
  const [activeModel, setActiveModel] = useState<string>('qwen2.5:1.5b');
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize status & default greeting
  useEffect(() => {
    ollamaService.checkOllamaStatus().then(status => {
      setIsOllamaReady(status.online);
      setAvailableModels(status.models);
      setActiveModel(ollamaService.getActiveModel());
    });

    const userName = userProfile?.fullName ? userProfile.fullName.split(' ')[0] : 'Citizen';
    const categoryName = userProfile?.selectedCategory ? userProfile.selectedCategory.toUpperCase() : 'STUDENT';
    const stateName = userProfile?.answers?.state || 'Maharashtra';
    const casteName = userProfile?.answers?.casteCategory || 'OBC';

    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: `Namaste **${userName}**! 🙏\n\nI am **Scheme Sathi AI**, powered by **Qwen** running locally on your device.\n\nI have loaded your profile parameters (**${categoryName}** in **${stateName}**, **${casteName}** quota). Ask me anything about scholarships, eligibility criteria, or required certificates, and I'll ask follow-up questions to narrow down the exact schemes for you!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: [
          'What scholarships match my profile right now?',
          'Show MahaDBT OBC post-matric scholarships',
          'Find central government fee waiver grants'
        ]
      }
    ]);
  }, [userProfile]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const botMsgId = `bot_${Date.now()}`;
    let accumulatedText = '';

    // Create bot message placeholder for streaming
    setMessages(prev => [
      ...prev,
      {
        id: botMsgId,
        sender: 'bot',
        text: '...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    try {
      const response = await ollamaService.generateChatResponse({
        userMessage: text,
        chatHistory: messages,
        userProfile,
        onToken: (token) => {
          accumulatedText += token;
          setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, text: accumulatedText } : m));
        }
      });

      setMessages(prev => prev.map(m => m.id === botMsgId ? {
        ...m,
        text: response.replyText,
        matchedSchemes: response.matchedSchemes,
        suggestedFollowUps: response.followUps
      } : m));
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `bot_err_${Date.now()}`,
          sender: 'bot',
          text: 'I encountered an issue connecting to the local Qwen model. Make sure Ollama is running with `ollama run qwen2.5:1.5b`.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleModelChange = (newModel: string) => {
    setActiveModel(newModel);
    ollamaService.setActiveModel(newModel);
  };

  return (
    <>
      {/* Floating Chat Trigger Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer group border border-white/20"
          title="Open Scheme Sathi AI Advisor"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-white animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-black flex items-center gap-1">
              <span>Scheme Sathi AI</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </div>
            <div className="text-[10px] text-white/80 font-medium">
              Powered by Qwen (Local)
            </div>
          </div>
        </button>
      )}

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div 
          data-lenis-prevent
          className="fixed bottom-3 sm:bottom-6 right-2 sm:right-6 z-50 w-[95vw] sm:w-[460px] h-[640px] max-h-[90vh] rounded-3xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-white/15 shadow-2xl shadow-slate-900/40 dark:shadow-black flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
                <Bot className="w-5 h-5 text-emerald-300" />
                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                  isOllamaReady ? 'bg-emerald-400' : 'bg-amber-400'
                }`} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black tracking-tight">Scheme Sathi AI</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 font-bold border border-emerald-400/30 flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    <span>Qwen</span>
                  </span>
                </div>
                <div className="text-[11px] text-white/80 flex items-center gap-1.5">
                  <span>{isOllamaReady ? 'Local Ollama Connected' : 'Local Fallback Mode'}</span>
                  <span>•</span>
                  {availableModels.length > 1 ? (
                    <select
                      value={activeModel}
                      onChange={(e) => handleModelChange(e.target.value)}
                      className="bg-black/30 text-white text-[10px] rounded px-1.5 py-0.5 border border-white/20 cursor-pointer font-medium"
                    >
                      {availableModels.map(m => (
                        <option key={m} value={m} className="bg-slate-900 text-white">
                          {m}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="font-mono text-[10px] bg-black/20 px-1 rounded">{activeModel}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  const userName = userProfile?.fullName ? userProfile.fullName.split(' ')[0] : 'Citizen';
                  setMessages([
                    {
                      id: `reset_${Date.now()}`,
                      sender: 'bot',
                      text: `Conversation restarted! How can I help you find and apply for schemes today, **${userName}**?`,
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                  ]);
                }}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Clear Chat History"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Minimize Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Scrollable Area */}
          <div 
            data-lenis-prevent
            className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain bg-slate-50/70 dark:bg-[#080d17]/70"
          >
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  <div
                    className={`max-w-[90%] p-4 rounded-3xl text-xs leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-sm shadow-md shadow-emerald-600/20'
                        : 'bg-white dark:bg-[#121c32] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <FormattedMarkdown content={msg.text} isUser={isUser} />
                  </div>

                  {/* Render Matched Scheme Recommendations */}
                  {!isUser && msg.matchedSchemes && msg.matchedSchemes.length > 0 && (
                    <div className="w-full space-y-2 pt-1.5 max-w-[95%]">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 px-1">
                        <Award className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Verified Direct Matches:</span>
                      </div>
                      <div className="space-y-2">
                        {msg.matchedSchemes.map((scheme) => (
                          <div
                            key={scheme.id}
                            className="p-3.5 rounded-2xl bg-white dark:bg-[#10182b] border border-emerald-500/25 hover:border-emerald-500 transition-all shadow-sm space-y-2 group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
                                  {scheme.type}
                                </span>
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {scheme.title}
                                </h4>
                              </div>
                              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-lg border border-emerald-500/30 shrink-0">
                                {scheme.financialBenefitText}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                              {scheme.shortDescription}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                              <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                                <Clock className="w-3 h-3 text-amber-500" />
                                <span>{scheme.deadline || 'Regular Cycle'}</span>
                              </span>

                              <div className="flex items-center gap-1.5">
                                {onSelectScheme && (
                                  <button
                                    onClick={() => onSelectScheme(scheme)}
                                    className="px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all"
                                  >
                                    <span>View Details</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </button>
                                )}
                                <a
                                  href={scheme.officialPortalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                                  title="Official Portal"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Follow-Ups Chips */}
                  {!isUser && msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[95%]">
                      {msg.suggestedFollowUps.map((fu, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(fu)}
                          className="text-[11px] text-left px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all cursor-pointer font-medium hover:scale-[1.02] active:scale-95"
                        >
                          💬 {fu}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400 px-1 font-medium">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-white dark:bg-[#121c32] border border-slate-200/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 w-fit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
                <span>Qwen is evaluating eligibility & matching schemes...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white dark:bg-[#0c1220] border-t border-slate-200 dark:border-white/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about schemes, eligibility, certificates..."
                className="flex-1 px-4 py-2.5 rounded-2xl glass-input text-xs text-slate-900 dark:text-white focus:border-emerald-500 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-[10px] text-slate-400 mt-1.5 text-center flex items-center justify-center gap-1 font-medium">
              <Cpu className="w-3 h-3 text-emerald-500" />
              <span>Running locally on device via Ollama ({activeModel})</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
