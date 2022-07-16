
function getBadge(badgeLable, badgeValue){
    // const badgeLable = "Pradeep Suthar"
    // const badgeValue = `1,212`

    const lableLength = badgeLable.length*7.1
    const valueLength = badgeValue.length*7.1+10
    
    const textLength = lableLength+valueLength
    const secondaryColor="#8a2be2"
    const primaryColor="#555"
    const textColor="#fff"
    
    console.log(badgeLable.length)
    console.log(badgeValue.length)
    const lableX = 7
    const counterX = lableLength +5
    
    const badge = `<svg xmlns="http://www.w3.org/2000/svg" width="${textLength}" height="20">
        <linearGradient id="b" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
            <stop offset="1" stop-opacity=".1"/>
        </linearGradient>
        <mask id="a">
            <rect width="${textLength}" height="20" rx="3" fill="#fff"/>
        </mask>
        <g mask="url(#a)" >
            <rect x="0" width="${lableLength}" height="20" fill="${primaryColor}"/>
            <rect x="${lableLength}" width="${valueLength}" height="20" fill="${secondaryColor}"/>
            <rect width="${textLength}" height="20" fill="url(#b)"/>
        </g>
        <g fill="${textColor}" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
            <text x="${lableX}" y="15" fill="#010101" fill-opacity=".3">${badgeLable}</text>
            <text x="${lableX}" y="14">${badgeLable}</text>
            <text x="${counterX}" y="15" fill="#010101" fill-opacity=".3">${badgeValue}</text>
            <text x="${counterX}" y="14">${badgeValue}</text>
        </g>
    </svg>`;
    return badge;
}

module.exports={
    getBadge
}

