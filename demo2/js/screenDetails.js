function getScreenDetails(screenName) {

    var details;

    screenName = screenName.replace("price chg", "");
    screenName = trim1(screenName);

    if (screenName == "Cash Rich Firms") {
    	details = { "url":"http://www.aaii.com/stock-screens/screendata/CashRichFirms", 
    				"desc":"Locating firms with a high proportion of cash to share price." };
    
    } else if (screenName == "Dogs of the Dow") {
    	details = { "url":"http://www.aaii.com/stock-screens/screendata/Dogs",
    				"desc":"Identifying contrarian plays among the Dow Jones Industrial stocks." };
    
    } else if (screenName == "Fundamental Rule of Thumb") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/FRT",
    			   "desc":"An old Value screen combining the P/E ratio, dividend yield, and an adjusted return on equity that's still applicable in today's market."};
    
    } else if (screenName == "Graham--Defensive Investor (Non-Utility)") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/GrahamDINon",
    			   "desc":"Credited as one of the fathers of in-depth security analysis, Graham's approach focuses on the concept of intrinsic Value."};
    
    } else if (screenName == "Graham--Defensive Investor (Utility)") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/GrahamDIU",
    			   "desc":"Graham's approach leads to three separate that focus on the concept of intrinsic value, justified by a firm's financial strength."};
   
    } else if (screenName == "Graham--Enterprising Investor") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/GrahamEI",
    			   "desc":"Credited as one of the fathers of in-depth security analysis, Graham's approach focuses on the concept of intrinsic Value."};
    
    } else if (screenName == "Graham--Enterprising Investor Revised") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/GrahamEIR",
    			   "desc":"Credited as one of the fathers of in-depth security analysis, Graham's approach focuses on the concept of intrinsic Value."};

    } else if (screenName == "Magic Formula") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Magic",
    			   "desc":"Joel Greenblatt's simple investing approach is based finding companies with high return on investment that are trading for less than they are worth."};

    } else if (screenName == "O'Shaughnessy: Value") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauValue",
    			   "desc":"Value screen created by James O'Shaughnessy that lead to the best risk adjusted return among a wide range of Value approaches."};

    } else if (screenName == "Piotroski: High F-Score") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Piotroski",
    			   "desc":"A study of low price-to-book Value stocks to see if it's possible to establish basic financial criteria to help separate the winners from the losers."};

    } else if (screenName == "Piotroski 9") {

    } else if (screenName == "Price-to-Free-Cash-Flow") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/PricetoFreeCashFlow",
    			   "desc":"An exploration of the basics of cash flow analysis and the implementation of a price to free cash flow screen."};

    } else if (screenName == "Schloss") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Schloss",
    		       "desc":"This screen looks for stocks hitting new lows, trading at a price lower than book Value per share, with no debt and high levels of insider ownership."};

    } else if (screenName == "Dogs of the Dow: Low Priced 5") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/DogsLowPriced5",
    			   "desc":"Identifying contrarian plays among the Dow Jones Industrial stocks."};

    } else if (screenName == "Shadow Stock Screen") {
        details = {"url":"http://www.aaii.com/model-portfolios/stock",
                   "desc":"AAII's model portfolio. Trades occur quarterly to minimize transactions.  Focuses on well-priced micro-cap stocks."};

    } else if (screenName == "Weiss Blue Chip Div Yield") {
		details = {"url":"http://www.aaii.com/stock-screens/screendata/Weiss",
				   "desc":"A conservative, blue-chip investment style with Value approach with an emphasis on selecting stocks with favorable dividend yields."};
 
    } else if (screenName == "Lakonishok") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Lakonishok",
    			   "desc":"Identifying stocks trading at a discount to their industry norms but showing recent price strength and upward earnings revisions."};

    } else if (screenName == "O'Shaughnessy: All Cap") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauAllCap",
    			   "desc":"Growth at a reasonable price screen created by James O'Shaughnessy."};

    } else if (screenName == "O'Shaughnessy: Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauGrowth",
    			   "desc":"O'Shaughnessy tries to predict the future using historical long-term trends."};

    } else if (screenName == "O'Shaughnessy: Growth Market Leaders") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauGML",
    			   "desc":"O'Shaughnessy tries to predict the future using historical long-term trends."};

    } else if (screenName == "O'Shaughnessy: Small Cap Growth & Value") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauSmallCap",
    			   "desc":"O'Shaughnessy tries to predict the future using historical long-term trends."};

    } else if (screenName == "O'Shaughnessy: Tiny Titans") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/OShauTinyTitans",
    			   "desc":"O'Shaughnessy tries to predict the future using historical long-term trends."};
        
    } else if (screenName == "Dual Cash Flow") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/DualCashFlow",
    			   "desc":"An analysis that can provide advance notice a company may be facing financial trouble, though earnings and sales appear strong."};

    } else if (screenName == "IBD Stable 70") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/IBD",
    			   "desc":"The IBD Stable 70 screen has easily outperformed the small-, mid- and large-cap indexes over the last several years."};

    } else if (screenName == "Inve$tWare Quality Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Investware",
    			   "desc":"The NAIC adopts a simple buy-and-hold, fundamental approach to Growth investing."};

    } else if (screenName == "Return on Equity") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/ROE",
    			   "desc":"A screen that identifies stocks with above earnings and sales growth that have consistently outperformed their peers measured by ROE."};
       
    } else if (screenName == "Driehaus") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Driehaus",
    			   "desc":"Classic momentum approach that seeks out stocks that are rapidly rising in price with the belief that the rising price will attract other investors."};

    } else if (screenName == "Foolish Small Cap 8") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Foolish8",
    			   "desc":"The Motley Fool’s Foolish 8 method for investing in small caps looks for profitable and rapidly growing companies with strong price momentum."};

    } else if (screenName == "Kirkpatrick Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/KirkpatrickGrowth",
    			   "desc":"Investing model outlined in Charles Kirkpatrick's book Beat the Market: Invest by Knowing What Stocks to Buy and What Stocks to Sell."};

    } else if (screenName == "O'Neil's CAN SLIM") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/CANSLIM",
    			   "desc":"An interesting approach that combines both fundamental and technical factors to seek out companies with strong earnings and price momentum."};

    } else if (screenName == "O'Neil's CAN SLIM No Float") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/CANSLIMNofloat",
    			   "desc":"How to implement William O’Neil’s revised CAN SLIM approach to screen for fast-growing stocks."};

    } else if (screenName == "O'Neil's CAN SLIM Revised 3rd Edition") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/CANSLIMRev",
    			   "desc":"How to implement William O’Neil’s revised CAN SLIM approach to screen for fast-growing stocks."};
       
    } else if (screenName == "Buffett: Hagstrom") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/BuffHags",
    			   "desc":"Hagstrom identifies 12 basic principles that a company should possess to be considered for purchase."};

    } else if (screenName == "Buffettology: EPS Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/BuffettologyEPSGrowth",
    			   "desc":"Buffett approach seeking consumer monopolies selling at a reasonable price."};

    } else if (screenName == "Buffettology: Sustainable Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/BuffettologySusGrowth",
    			   "desc":"Buffett approach seeking consumer monopolies selling at a reasonable price."};

    } else if (screenName == "Dividend (High Relative Yield)") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/DividendHighRelativeYield",
    			   "desc":"Using the dividend-yield approach to invest during volatile markets."};

    } else if (screenName == "Dividend Screen: DRPs") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/DRPs",
    			   "desc":"A screen for stocks with DRPs (dividend reinvestment plans)."};

    } else if (screenName == "Dividend Screen: Non-DRPs") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/NonDRPs",
    			   "desc":"A screen for stocks with DRPs (dividend reinvestment plans)."};

    } else if (screenName == "Dreman") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Dreman",
    			   "desc":"Avoiding the psychological traps of the market by following the principles of contrarian investing."};

    } else if (screenName == "Fisher (Philip)") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Fisher",
    			   "desc":"A perspective on the evolution of the investment philosophy of a successful money manager who learned from his mistakes."};

    } else if (screenName == "Foolish Small Cap 8 Revised") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Foolish8Rev",
    			   "desc":"An inside look at the Motley Fool's small-cap screen and the recent revisions they've made to update the screen."};

    } else if (screenName == "Kirkpatrick Bargain") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/KirkpatrickBargain",
    			   "desc":"Investing model outlined in Charles Kirkpatrick's book Beat the Market: Invest by Knowing What Stocks to Buy and What Stocks to Sell."};

    } else if (screenName == "Kirkpatrick Value") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/KirkpatrickValue",
    	 		   "desc":"Investing model outlined in Charles Kirkpatrick's book Beat the Market: Invest by Knowing What Stocks to Buy and What Stocks to Sell."};

    } else if (screenName == "Lynch") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Lynch",
    			   "desc":"A strictly bottom-up approach, focusing on companies familiar to the investor."};

    } else if (screenName == "Murphy Technology") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Murphy",
    			   "desc":"An approach that identifies technology stocks with high R&D spending, strong margins and Growth, but selling at attractive Values."};

    } else if (screenName == "Neff") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Neff",
    			   "desc":"An approach using a stringent contrarian viewpoint—finding underValued, out-of-favor stocks in the bargain basement that have an optimistic future."};

    } else if (screenName == "Price-to-Sales") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/PricetoSales",
    			   "desc":"Research indicates that using price-to-sales ratios may lead to better investment results than price-to-book-Value ratios or price-earnings ratios."};

    } else if (screenName == "Rule #1 Investing") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Rule1",
    			   "desc":"Adapted from Phil Town's book Rule #1, this screen attempts to identify wonderful companies with attractive prices."};

    } else if (screenName == "T. Rowe Price") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/TRowePrice",
    			   "desc":"Price's long-standing approach focus's on Growth stocks but avoids over glamorized stocks."};

    } else if (screenName == "Templeton") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Templeton",
    			   "desc":"Looks for favorable margins, consistent earnings Growth and price-earnings ratios below historic norms."};

    } else if (screenName == "Wanger (Revised)") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Wanger",
    			   "desc":"First introduced in May 1997, this approach focuses on limiting the risks of investing in small-cap stocks."};

    } else if (screenName == "Zweig") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Zweig",
    			   "desc":"A strategy that identifies companies with strong Growth, a reasonable price-earnings ratio given the company's Growth rate."};

    } else if (screenName == "ADR Screen") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/ADRs",
    			   "desc":"An ADR stock screen seeks out foreign companies with attractive PEG ratios and increasing price strength."};

    } else if (screenName == "MAGNET Complex") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/MAGNETComplex",
    			   "desc":"These two blend Value, Growth and momentum investing styles into a single stock selection model."};

    } else if (screenName == "MAGNET Simple") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/MAGNETSimple",
    			   "desc":"These two blend Value, Growth and momentum investing styles into a single stock selection model."};

    } else if (screenName == "Muhlenkamp") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Muhlenkamp",
    			   "desc":"Muhlenkamp uses a bottom-up approach to selecting stocks, but adjusts his benchmarks based upon the broad economic environment…"};

    } else if (screenName == "Oberweis Octagon") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Oberweis",
    			   "desc":"Management seeks out rapidly growing companies and invests in those they feel are attractively priced."};

    } else if (screenName == "Stock Market Winners") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Winners",
    			   "desc":"A screen that tries to interpret and apply successful trading rules in the real market environment."};

    } else if (screenName == "Value on the Move--PEG With Est Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/ValueEstGrowth",
    			   "desc":"Using PEG ratios and price strength to find Growth stocks trading a reasonable price."};

    } else if (screenName == "Value on the Move--PEG With Hist Growth") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/ValueHistGrowth",
    			   "desc":"Using PEG ratios and price strength to find Growth stocks trading a reasonable price."};
        
    } else if (screenName == "Dreman With Est Revisions") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/DremanWithEstRev",
    			   "desc":"Utilizing contrarian stocks with upward earnings revisions."};

    } else if (screenName == "Est Rev: Down") {

    } else if (screenName == "Est Rev: Down 5%") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/EstRevDown5",
    			   "desc":"Introduction to the use of earnings estimates."};

    } else if (screenName == "Est Rev: Up 20.7") {

    } else if (screenName == "Est Rev: Up 5%") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/EstRevUp5",
    			   "desc":"Introduction to the use of earnings estimates."};

    } else if (screenName == "Est Rev: Top 30 Up") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/EstRevUp",
    			   "desc":"Introduction to the use of earnings estimates."};

    } else if (screenName == "Est Rev: Lowest 30 Down") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/EstRevDown",
    			   "desc":"Introduction to the use of earnings estimates."};

    } else if (screenName == "P/E Relative") {
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/PERelative",
    			   "desc":"A closely followed screen that looks back at the different relationships of the price-earnings ratio of a stock."};
       
    } else if (screenName == "Insider Net Purchases") { 
    	details = {"url":"http://www.aaii.com/stock-screens/screendata/Insider",
    			   "desc":"Who insiders are, what requirements they must obey, and what insider data is important."};
    } 

    return details;
}


function getScreenType(screenName) {

    screenName = screenName.replace("price chg", "");
    screenName = trim1(screenName);

    if ((screenName == "Cash Rich Firms") ||
        (screenName == "Dogs of the Dow") ||
        (screenName == "Fundamental Rule of Thumb") ||
        (screenName == "Graham--Defensive Investor (Non-Utility)") ||
        (screenName == "Graham--Defensive Investor (Utility)") ||
        (screenName == "Graham--Enterprising Investor") ||
        (screenName == "Graham--Enterprising Investor Revised") ||
        (screenName == "Magic Formula") ||
        (screenName == "O'Shaughnessy: Value") ||
        (screenName == "Piotroski: High F-Score") ||
        (screenName == "Piotroski 9") ||
        (screenName == "Price-to-Free-Cash-Flow") ||
        (screenName == "Schloss") ||
        (screenName == "Dogs of the Dow: Low Priced 5") ||
        (screenName == "Shadow Stock Screen") ||
        (screenName == "Weiss Blue Chip Div Yield")) {
        return "Value";
    } else if ((screenName == "Lakonishok") ||
        (screenName == "O'Shaughnessy: All Cap") ||
        (screenName == "O'Shaughnessy: Growth") ||
        (screenName == "O'Shaughnessy: Growth Market Leaders") ||
        (screenName == "O'Shaughnessy: Small Cap Growth & Value") ||
        (screenName == "O'Shaughnessy: Tiny Titans")) {
        return "Value With Price Momentum";
    } else if ((screenName == "Dual Cash Flow") ||
        (screenName == "IBD Stable 70") ||
        (screenName == "Inve$tWare Quality Growth") ||
        (screenName == "Return on Equity")) {
        return "Growth";
    } else if ((screenName == "Driehaus") ||
        (screenName == "Foolish Small Cap 8") ||
        (screenName == "Kirkpatrick Growth") ||
        (screenName == "O'Neil's CAN SLIM") ||
        (screenName == "O'Neil's CAN SLIM No Float") ||
        (screenName == "O'Neil's CAN SLIM Revised 3rd Edition")) {
        return "Growth With Price Momentum";
    } else if ((screenName == "Buffett: Hagstrom") ||
        (screenName == "Buffettology: EPS Growth") ||
        (screenName == "Buffettology: Sustainable Growth") ||
        (screenName == "Dividend (High Relative Yield)") ||
        (screenName == "Dividend Screen: DRPs") ||
        (screenName == "Dividend Screen: Non-DRPs") ||
        (screenName == "Dreman") ||
        (screenName == "Fisher (Philip)") ||
        (screenName == "Foolish Small Cap 8 Revised") ||
        (screenName == "Kirkpatrick Bargain") ||
        (screenName == "Kirkpatrick Value") ||
        (screenName == "Lynch") ||
        (screenName == "Murphy Technology") ||
        (screenName == "Neff") ||
        (screenName == "Price-to-Sales") ||
        (screenName == "Rule #1 Investing") ||
        (screenName == "T. Rowe Price") ||
        (screenName == "Templeton") ||
        (screenName == "Wanger (Revised)") ||
        (screenName == "Zweig")) {
        return "Growth & Value";
    } else if ((screenName == "ADR Screen") ||
        (screenName == "MAGNET Complex") ||
        (screenName == "MAGNET Simple") ||
        (screenName == "Muhlenkamp") ||
        (screenName == "Oberweis Octagon") ||
        (screenName == "Stock Market Winners") ||
        (screenName == "Value on the Move--PEG With Est Growth") ||
        (screenName == "Value on the Move--PEG With Hist Growth")) {
        return "Growth & Value With Price Momentum";
    } else if ((screenName == "Dreman With Est Revisions") ||
        (screenName == "Est Rev: Down") ||
        (screenName == "Est Rev: Down 5%") ||
        (screenName == "Est Rev: Up 20.7") ||
        (screenName == "Est Rev: Up 5%") ||
        (screenName == "Est Rev: Top 30 Up") ||
        (screenName == "Est Rev: Lowest 30 Down") ||
        (screenName == "P/E Relative")) {
        return "Earnings Estimates";
    } else if ((screenName == "All Exchange-Listed Stocks") ||
        (screenName == "All ADRs") ||
        (screenName == "S&P SmallCap 600 Growth (TR)") ||
        (screenName == "S&P MidCap 400 Value (TR)") ||
        (screenName == "S&P SmallCap 600 (TR)") ||
        (screenName == "S&P 500 Growth (TR)") ||
        (screenName == "S&P SmallCap 600 Value (TR)") ||
        (screenName == "S&P 500 (TR)") ||
        (screenName == "S&P MidCap 400 (TR)") ||
        (screenName == "S&P 500 Value (TR)") ||
        (screenName == "S&P SmallCap 600") ||
        (screenName == "S&P MidCap 400 Growth (TR)") ||
        (screenName == "NASDAQ 100") ||
        (screenName == "S&P MidCap 400") ||
        (screenName == "Dow Jones 30") ||
        (screenName == "S&P 500")) {
        return "Indexes";
    } else if (screenName == "T-Bills") {
        return "T-Bills"; 
    } else if (screenName == "Insider Net Purchases") {
        return "Insider Net Purchases";
    } else {
        console.log("Error - Unknown Screen: " + screenName);
    }

    return "";
}


function getTurnover(screenName) {

    screenName = trim1(screenName);

    var turnover = {
        "S&P 500 price chg":[0],
        "S&P MidCap 400 price chg":[0],
        "S&P SmallCap 600 price chg":[0],
        "NASDAQ 100 price chg":[0],
        "Dow Jones 30 price chg":[0],
        "T-Bills price chg":[0],
        "S&P 500 (TR)":[0],
        "S&P 500 Growth (TR)":[0],
        "S&P 500 Value (TR)":[0],
        "S&P MidCap 400 (TR)":[0],
        "S&P MidCap 400 Growth (TR)":[0],
        "S&P MidCap 400 Value (TR)":[0],
        "S&P SmallCap 600 (TR)":[0],
        "S&P SmallCap 600 Growth (TR)":[0],
        "S&P SmallCap 600 Value (TR)":[0],
        "All Exchange-Listed Stocks price chg":[0],
        "ADR Screen price chg":["44%"],
        "All ADRs price chg":[0],
        "Buffett: Hagstrom price chg":["20%"],
        "Buffettology: EPS Growth price chg":["12%"],
        "Buffettology: Sustainable Growth price chg":["13%"],
        "O'Neil's CAN SLIM price chg":["#DIV/0!"],
        "O'Neil's CAN SLIM Revised 3rd Edition price chg":["35%"],
        "O'Neil's CAN SLIM No Float price chg":["0%"],
        "Cash Rich Firms price chg":["25%"],
        "Dual Cash Flow price chg":["31%"],
        "Dividend (High Relative Yield) price chg":["20%"],
        "Dogs of the Dow price chg":["7%"],
        "Dogs of the Dow: Low Priced 5 price chg":["16%"],
        "Dreman price chg":["32%"],
        "Dreman With Est Revisions price chg":["65%"],
        "Driehaus price chg":["63%"],
        "Dividend Screen: DRPs price chg":["26%"],
        "Dividend Screen: Non-DRPs price chg":["28%"],
        "Est Rev: Lowest 30 Down  price chg":["91%"],
        "Est Rev: Down 5% price chg":["89%"],
        "Est Rev: Top 30 Up price chg":["93%"],
        "Est Rev: Up 5% price chg":["92%"],
        "Fisher (Philip) price chg":["33%"],
        "Foolish Small Cap 8 price chg":["40%"],
        "Foolish Small Cap 8 Revised price chg":["34%"],
        "Price-to-Free-Cash-Flow price chg":["22%"],
        "Fundamental Rule of Thumb price chg":["21%"],
        "Graham--Defensive Investor (Non-Utility) price chg":["20%"],
        "Graham--Defensive Investor (Utility) price chg":["14%"],
        "Graham--Enterprising Investor price chg":["45%"],
        "Graham--Enterprising Investor Revised price chg":["100%"],
        "IBD Stable 70 price chg":["12%"],
        "Insider Net Purchases price chg":["30%"],
        "Inve$tWare Quality Growth price chg":["11%"],
        "Kirkpatrick Bargain price chg":["64%"],
        "Kirkpatrick Growth price chg":["62%"],
        "Kirkpatrick Value price chg":["74%"],
        "Lakonishok price chg":["90%"],
        "Lynch price chg":["21%"],
        "Magic Formula  price chg":["24%"],
        "MAGNET Complex price chg":["74%"],
        "MAGNET Simple price chg":["67%"],
        "Muhlenkamp price chg":["24%"],
        "Murphy Technology price chg":["21%"],
        "Neff price chg":["33%"],
        "O'Shaughnessy: All Cap price chg":["49%"],
        "O'Shaughnessy: Growth Market Leaders price chg":["43%"],
        "O'Shaughnessy: Growth price chg":["38%"],
        "O'Shaughnessy: Small Cap Growth & Value price chg":["49%"],
        "O'Shaughnessy: Tiny Titans price chg":["42%"],
        "O'Shaughnessy: Value price chg":["21%"],
        "Oberweis Octagon price chg":["42%"],
        "P/E Relative price chg":["77%"],
        "Value on the Move--PEG With Est Growth price chg":["45%"],
        "Value on the Move--PEG With Hist Growth price chg":["36%"],
        "Piotroski: High F-Score price chg":["24%"],
        "Piotroski 9 price chg":["#DIV/0!"],
        "Price-to-Sales price chg":["39%"],
        "Return on Equity price chg":["21%"],
        "Rule #1 Investing price chg":["25%"],
        "Schloss price chg":["55%"],
        "Shadow Stock Screen price chg":["35%"],
        "T. Rowe Price price chg":["40%"],
        "Templeton price chg":["28%"],
        "Wanger (Revised) price chg":["27%"],
        "Weiss Blue Chip Div Yield price chg":["25%"],
        "Stock Market Winners price chg":["59%"],
        "Zweig price chg":["42%"]
    };

    return turnover[screenName];
}
