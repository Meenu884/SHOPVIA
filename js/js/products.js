const CATS={men:"Men's Fashion",women:"Women's Fashion",electronics:"Electronics",beauty:"Beauty & Cosmetics",jewellery:"Jewellery & Accessories","home-living":"Home & Living",sports:"Sports & Fitness"};
const svgImg=(e,h)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${h%360},70%,28%)'/><stop offset='1' stop-color='hsl(${(h+60)%360},80%,45%)'/></linearGradient></defs><rect width='400' height='400' fill='url(#g)'/><text x='200' y='235' font-size='150' text-anchor='middle'>${e}</text></svg>`);
const NAMES={men:[["Denim Jacket","🧥"],["Street Sneakers","👟"],["Oxford Shirt","👔"],["Slim Chinos","👖"],["Leather Belt","🪢"],["Classic Cap","🧢"]],
women:[["Floral Dress","👗"],["Tote Handbag","👜"],["Block Heels","👠"],["Silk Scarf","🧣"],["Sun Hat","👒"],["Cotton Kurti","👚"]],
electronics:[["Wireless Headphones","🎧"],["Smart Watch","⌚"],["Gaming Laptop","💻"],["Bluetooth Speaker","🔊"],["Smartphone","📱"],["Mirrorless Camera","📷"]],
beauty:[["Matte Lipstick","💄"],["Glow Serum","🧴"],["Perfume Mist","🌸"],["Nail Colour Set","💅"],["Face Cream","🧼"],["Hair Dryer","💇"]],
jewellery:[["Diamond Ring","💍"],["Gold Necklace","📿"],["Pearl Earrings","✨"],["Aviator Sunglasses","🕶️"],["Silver Bracelet","⛓️"],["Leather Wallet","👛"]],
"home-living":[["Velvet Sofa","🛋️"],["Table Lamp","💡"],["Ceramic Vase","🏺"],["Wall Clock","🕰️"],["Scented Candle","🕯️"],["Cushion Set","🛏️"]],
sports:[["Yoga Mat","🧘"],["Dumbbell Set","🏋️"],["Football","⚽"],["Running Shoes","🏃"],["Cricket Bat","🏏"],["Cycling Helmet","🚴"]]};
const PRODUCTS=[];let n=0;
Object.keys(NAMES).forEach(c=>NAMES[c].forEach(([name,emo],i)=>{n++;const orig=Math.round((499+(n*733)%7500)/10)*10,disc=[10,15,20,25,30,35,40,50][(n*3)%8],h=(n*47)%360;
PRODUCTS.push({id:n,name,cat:c,desc:`${name} from SHOPVIA's ${CATS[c]} collection. Premium quality, thoughtfully designed, with easy 7-day returns.`,orig,disc,price:Math.round(orig*(1-disc/100)),rating:+(3.6+((n*7)%15)/10).toFixed(1),stock:n%9!==0,imgs:[svgImg(emo,h),svgImg(emo,h+40),svgImg(emo,h+80)],img:svgImg(emo,h),isNew:i>=3})}));
