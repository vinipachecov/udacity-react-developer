

const musicData = [
  { artist: 'Adele', name: '25', sales: 1731000 },
  { artist: 'Drake', name: 'Views', sales: 1608000 },
  { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
  { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
  { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
  { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
  { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
  { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
  { artist: 'Rihanna', name: 'Anti', sales: 603000 },
  { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

musicData.filter(album => (album.artist + album.name).length < 25).reduce((acc, cur) => {
  return acc + cur.sales;
}, 0);


const data = [
  { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
  { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
  { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
  { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
  { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
  { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];
let test = {};
const res = data.reduce((acc, cur) => {    
  cur.favoriteIceCreams.forEach(item => {
    if(!acc[item]) {           
      acc[item] = 1; 
    } else {
      acc[item]++
    }    
  });  
  return acc;
}, {});

console.log(res);