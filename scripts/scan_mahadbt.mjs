import fs from 'fs';

const html = fs.readFileSync('mahadbt_home.html', 'utf8');

const listStart = html.indexOf('class="resp-tabs-list hor_1"');
const contStart = html.indexOf('class="resp-tabs-container hor_1"');
const contEnd = html.indexOf('Pre Matric', contStart);

console.log({ listStart, contStart, contEnd });

if (listStart !== -1 && contStart !== -1 && contEnd !== -1) {
  const listSnippet = html.substring(listStart, contStart);
  const contSnippet = html.substring(contStart, contEnd);

  const depts = [...listSnippet.matchAll(/<li>([\s\S]*?)<\/li>/gi)].map(m => m[1].trim());
  const lists = [...contSnippet.matchAll(/<div\s+class=["']list["']>([\s\S]*?)<\/div>/gi)].map(m => m[1]);

  console.log(`Departments found: ${depts.length}, Lists found: ${lists.length}`);

  const results = [];
  depts.forEach((dept, i) => {
    const listHtml = lists[i] || '';
    const regex = /<a\s+[^>]*href=["']([^"']*\/SchemeData\/SchemeData\?str=[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    let count = 0;
    while ((m = regex.exec(listHtml)) !== null) {
      count++;
      const url = m[1].startsWith('http') ? m[1] : 'https://mahadbt.maharashtra.gov.in' + m[1];
      const title = m[2].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#160;/g, ' ').replace(/\s+/g, ' ').trim();
      results.push({ department: dept, title, url });
    }
    console.log(`- ${dept}: ${count} schemes`);
  });

  fs.writeFileSync('scripts/mahadbt_scheme_catalog.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${results.length} total schemes to scripts/mahadbt_scheme_catalog.json`);
}
