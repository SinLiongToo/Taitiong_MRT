// ==========================================
// 1. 台中捷運綠線車站資料庫 (Taichung MRT Green Line)
// ==========================================
const stations = [
    { id: "beitun", nameZH: "北屯總站", nameEN: "Beitun Main Station", poj: "Pak-tūn Tsóng-tsām", cx: 345, cy: 50, labelPos: { dx: 14, dy: 4, anchor: "start" }, isMain: true, stamp: "⛰️", transfer: "none", audioId: "1385(1),9142(1),12252(1),6427(1)" },
    { id: "jiushe", nameZH: "舊社", nameEN: "Jiushe", poj: "Kū-siā", cx: 290, cy: 65, labelPos: { dx: 0, dy: -14, anchor: "middle" }, isMain: false, stamp: "🏡", transfer: "none", audioId: "9860(1),4377(1)" },
    { id: "songzhu", nameZH: "松竹", nameEN: "Songzhu", poj: "Siông-tik", cx: 235, cy: 90, labelPos: { dx: 0, dy: -15, anchor: "middle" }, isMain: true, stamp: "🎋", transfer: "TRA", audioId: "27966(1)" },
    { id: "siwei", nameZH: "四維國小", nameEN: "Siwei Elementary School", poj: "Sù-uî Kok-sió", cx: 185, cy: 125, labelPos: { dx: 14, dy: -2, anchor: "start" }, isMain: false, stamp: "🏫", transfer: "none", audioId: "1409(1),5177(1),7071(1),196(1)" },
    { id: "chongde", nameZH: "文心崇德", nameEN: "Wenxin Chongde", poj: "Bûn-sim Tsông-tik", cx: 145, cy: 170, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🏟️", transfer: "none", audioId: "796(1),792(1),9285(1),2586(1)" },
    { id: "zhongqing", nameZH: "文心中清", nameEN: "Wenxin Zhongqing", poj: "Bûn-sim Tiong-tshing", cx: 115, cy: 220, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🏢", transfer: "none", audioId: "796(1),792(1),560(1),181(1)" },
    { id: "wenhua", nameZH: "文華高中", nameEN: "Wenhua High School", poj: "Bûn-huâ Ko-tiong", cx: 95, cy: 270, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🎒", transfer: "none", audioId: "796(1),771(1),5792(1),560(1)" },
    { id: "yinghua", nameZH: "文心櫻花", nameEN: "Wenxin Yinghua", poj: "Bûn-sim In-hua", cx: 85, cy: 320, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🌸", transfer: "none", audioId: "796(1),792(1),2127(1),771(1)" },
    { id: "cityhall", nameZH: "市政府", nameEN: "Taichung City Hall", poj: "Tshī-tsìng-hú", cx: 85, cy: 370, labelPos: { dx: 16, dy: 4, anchor: "start" }, isMain: true, stamp: "🏛️", transfer: "none", audioId: "1641(1),1656(1),3873(1)" },
    { id: "shuian", nameZH: "水安宮", nameEN: "Shuian Temple", poj: "Súi-an-king", cx: 95, cy: 420, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🛕", transfer: "none", audioId: "815(1),2281(1),205(1)" },
    { id: "forestpark", nameZH: "文心森林公園", nameEN: "Wenxin Forest Park", poj: "Bûn-sim Sim-lîm Kong-hn̂g", cx: 115, cy: 465, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: true, stamp: "🌳", transfer: "none", audioId: "796(1),792(1),792(1),782(1),200(1),9351(1)" },
    { id: "nantun", nameZH: "南屯", nameEN: "Nantun", poj: "Lâm-tūn", cx: 145, cy: 505, labelPos: { dx: 15, dy: 4, anchor: "start" }, isMain: false, stamp: "🪙", transfer: "none", audioId: "3332(1),9142(1)" },
    { id: "fengle", nameZH: "豐樂公園", nameEN: "Fengle Park", poj: "Hong-lo̍k Kong-hn̂g", cx: 185, cy: 540, labelPos: { dx: 0, dy: -14, anchor: "middle" }, isMain: false, stamp: "🎡", transfer: "none", audioId: "800(1),8086(1),200(1),9351(1)" },
    { id: "daqing", nameZH: "大慶", nameEN: "Daqing", poj: "Tāi-khìng", cx: 230, cy: 565, labelPos: { dx: 0, dy: 20, anchor: "middle" }, isMain: true, stamp: "🚂", transfer: "TRA", audioId: "20667(1)" },
    { id: "jiuzhangli", nameZH: "九張犁", nameEN: "Jiuzhangli", poj: "Káu-tiunn-lî", cx: 278, cy: 575, labelPos: { dx: 0, dy: -14, anchor: "middle" }, isMain: false, stamp: "🌾", transfer: "none", audioId: "41(1),7179(1),4703(1)" },
    { id: "jiude", nameZH: "九德", nameEN: "Jiude", poj: "Káu-tik", cx: 322, cy: 575, labelPos: { dx: 0, dy: 20, anchor: "middle" }, isMain: false, stamp: "🛡️", transfer: "none", audioId: "41(1),2586(1)" },
    { id: "wuri", nameZH: "烏日", nameEN: "Wuri", poj: "Oo-ji̍t", cx: 365, cy: 565, labelPos: { dx: 0, dy: -14, anchor: "middle" }, isMain: false, stamp: "☀️", transfer: "TRA", audioId: "20668(1)" },
    { id: "hsrstation", nameZH: "高鐵台中站", nameEN: "HSR Taichung Station", poj: "Ko-thih Tâi-tiong Tsām", cx: 395, cy: 535, labelPos: { dx: 0, dy: 22, anchor: "middle" }, isMain: true, stamp: "🚄", transfer: "TRA,HSR", audioId: "24834(1),20666(1),6427(1)" }
];

// ==========================================
// 2. 交通詞彙牆資料 (Vocabulary Data)
// ==========================================
const vocabData = [
    { zh: "捷運", en: "Subway / MRT", tw: "tsia̍t-ūn", type: "vehicles", audioId: "11513(1),10146(1)", emoji: "🚇" },
    { zh: "列車", en: "Train", tw: "lia̍t-tshia", type: "vehicles", audioId: "2107(1),3394(1)", emoji: "🚃" },
    { zh: "月台", en: "Platform", tw: "gue̍h-tâi", type: "stations", audioId: "803(1),1406(1)", emoji: "🚉" },
    { zh: "單程票", en: "Single Ticket", tw: "tan-tshîng-phiò", type: "vehicles", audioId: "562(1),10536(1),7683(1)", emoji: "🎫" },
    { zh: "悠遊卡", en: "EasyCard", tw: "iû-iû-khah", type: "vehicles", audioId: "1846(1),1846(1),1390(1)", emoji: "💳" },
    { zh: "一卡通", en: "iPASS", tw: "it-khá-thong", type: "vehicles", audioId: "2(1),1639(1),7901(1)", emoji: "💳" },
    { zh: "轉乘", en: "Transfer", tw: "tsuán-sîng", type: "stations", audioId: "2056(1),2427(1)", emoji: "🔄" },
    { zh: "逼卡", en: "Tap Card", tw: "pi-khah", type: "vehicles", audioId: "7073(1),1390(1)", emoji: "📲" },
    { zh: "電梯", en: "Elevator", tw: "tiān-the", type: "stations", audioId: "10283(1),5375(1)", emoji: "🛗" },
    { zh: "手扶梯", en: "Escalator", tw: "tshiú-phû-the", type: "stations", audioId: "794(1),5173(1),5375(1)", emoji: "🪜" },
    { zh: "閘門", en: "Ticket Gate", tw: "tsa̍h-mn̂g", type: "stations", audioId: "10257(1),811(1)", emoji: "🚧" },
    { zh: "廣播", en: "Announcement", tw: "kóng-pò", type: "stations", audioId: "200(1),8250(1)", emoji: "📢" },
    { zh: "票價", en: "Fare", tw: "phiò-kè", type: "vehicles", audioId: "7683(1),5063(1)", emoji: "💰" },
    { zh: "站務員", en: "Station Staff", tw: "tsām-bū-oân", type: "stations", audioId: "6427(1),7006(1),172(1)", emoji: "🧑‍✈️" },
    { zh: "台鐵", en: "Taiwan Railway", tw: "Tâi-thih", type: "vehicles", audioId: "1406(1),13130(1)", emoji: "🚂" },
    { zh: "高鐵", en: "High Speed Rail", tw: "Ko-thih", type: "vehicles", audioId: "5792(1),13130(1)", emoji: "🚄" }
];

// ==========================================
// 3. UI 語系對照表 (Multi-language Translation)
// ==========================================
let currentLang = "zh";
const uiStrings = {
    zh: {
        uiTitle: "<i class='fa-solid fa-train-subway'></i> 台中捷運四界行",
        uiSubtitle: "歡喜學台語 / Fun Taichung MRT Adventure",
        tabAdventure: "購票大冒險",
        tabVocab: "捷運詞彙牆",
        tabTime: "時間鐘點師",
        tabSandhi: "語音自查表",
        tabQuiz: "捷運大檢定",
        tabStamps: "我的集章冊",
        boothTitle: "<i class='fa-solid fa-ticket'></i> 售票亭 Ticket Booth",
        labelFrom: "起點站 From:",
        labelTo: "終點站 To:",
        labelClass: "票卡種類 Ticket Type:",
        labelPassengers: "張數 Tickets:",
        labelDepTime: "搭乘時間 Time:",
        infoDirection: "行車方向 Direction:",
        infoDuration: "乘車站數 Stops:",
        infoCost: "總票價 Total Cost:",
        infoPlatform: "候車月台 Platform:",
        btnPlayJourney: "播放台語購票語音",
        mapTitle: "<i class='fa-solid fa-compass'></i> 中捷綠線路線圖 Route Map",
        vocabTitle: "<i class='fa-solid fa-book-open'></i> 交通捷運詞彙牆 Vocabulary",
        clockTitle: "<i class='fa-solid fa-circle-notch'></i> 撥撥看時鐘 Clock Trainer",
        timeLearnTitle: "<i class='fa-solid fa-graduation-cap'></i> 時間台語發音教室",
        labelAdjustTime: "微調時間 Adjust Time:",
        labelPresetTime: "常見班次時間 Presets:",
        btnPlayClock: "播放台語時間發音",
        quizTitle: "<i class='fa-solid fa-gamepad'></i> 台語大檢定 Challenge Mode",
        quizWelcomeTitle: "準備接受中捷台語大挑戰了嗎？",
        quizWelcomeDesc: "我們提供兩大中捷聽力挑戰！點選按鈕後將隨機播放 10 題台語語音，在時限內選出正確答案。答對 8 題以上即可獲得該車站的限定捷運紀念印章喔！",
        quizSellerName: "中捷售票員聽力挑戰",
        quizTimeName: "發車班次聽力挑戰",
        btnRetry: "返回檢定選單",
        stampsTitle: "<i class='fa-solid fa-stamp'></i> 我的中捷集章冊 Stamp Album",
        stampsDesc: "在「捷運大檢定」中答對 8 題以上即可隨機解鎖一個捷運站的精美紀念印章。收集越多，代表你已經搭著捷運玩遍了台中！",
        sandhiTableTitle: "<i class='fa-solid fa-table-list'></i> 中捷站名台語音標變調對照表",
        sandhiTrainerTitle: "<i class='fa-solid fa-dumbbell'></i> 史秀里冊房台羅語音自查器"
    },
    en: {
        uiTitle: "<i class='fa-solid fa-train-subway'></i> Taichung MRT Sih-kài-hâng",
        uiSubtitle: "Learn Taiwanese Hokkien via Taichung MRT",
        tabAdventure: "Ticket Adventure",
        tabVocab: "Vocab Wall",
        tabTime: "Time Trainer",
        tabSandhi: "Voice Table",
        tabQuiz: "Quiz Challenge",
        tabStamps: "Stamp Album",
        boothTitle: "<i class='fa-solid fa-ticket'></i> Ticket Booth",
        labelFrom: "From:",
        labelTo: "To:",
        labelClass: "Ticket Type:",
        labelPassengers: "Tickets:",
        labelDepTime: "Time:",
        infoDirection: "Direction:",
        infoDuration: "Stops:",
        infoCost: "Total Cost:",
        infoPlatform: "Platform:",
        btnPlayJourney: "Play Booking Voice",
        mapTitle: "<i class='fa-solid fa-compass'></i> Green Line Map",
        vocabTitle: "<i class='fa-solid fa-book-open'></i> Vocab Wall",
        clockTitle: "<i class='fa-solid fa-circle-notch'></i> Interactive Clock",
        timeLearnTitle: "Time Pronunciation",
        labelAdjustTime: "Adjust Time:",
        labelPresetTime: "Presets:",
        btnPlayClock: "Play Time Voice",
        quizTitle: "<i class='fa-solid fa-gamepad'></i> Quiz Challenge",
        quizWelcomeTitle: "Are you ready for the MRT Quiz?",
        quizWelcomeDesc: "Choose a challenge! We will play 10 audio clips. Pick the correct answers in 20s. Score 8+ to unlock unique MRT station stamps!",
        quizSellerName: "Ticket Booth Listening Challenge",
        quizTimeName: "MRT Departure Listening Challenge",
        btnRetry: "Back to Quiz Menu",
        stampsTitle: "<i class='fa-solid fa-stamp'></i> MRT Stamp Album",
        stampsDesc: "Score 8+ in the quiz to unlock a station stamp. Collect them all to show your Taiwanese proficiency!",
        sandhiTableTitle: "<i class='fa-solid fa-table-list'></i> MRT Station Sandhi Guide Table",
        sandhiTrainerTitle: "<i class='fa-solid fa-dumbbell'></i> Syllable Sandhi Builder"
    }
};

// ==========================================
// 4. 音效對照表與拼音變調引擎 (Speech Database)
// ==========================================
const taigiAudioMap = {
    "清": "7513(1)",
    "保安": "20697(1)",
    "八堵": "20751(1)",
    "暖暖": "20753(1)",
    "瑞芳": "20755(1)",
    "雙溪": "20759(1)",
    "福隆": "20761(1)",
    "萬華": "20638(1)",
    "板橋": "20639(1)",
    "鶯歌": "20642(1)",
    "中壢": "20645(1)",
    "楊梅": "20647(1)",
    "湖口": "20649(1)",
    "竹北": "20651(1)",
    "六家": "28089(1)",
    "竹南": "20655(1)",
    "頭份": "5122(1),2045(1)",
    "銅鑼": "20660(1)",
    "三義": "20661(1)",
    "豐原": "20664(1)",
    "清水": "7524(1)",
    "沙鹿": "20720(1)",
    "龍井": "20721(1)",
    "大慶": "20667(1)",
    "烏日": "20668(1)",
    "員林": "20672(1)",
    "田中": "20675(1)",
    "二水": "20676(1)",
    "林內": "20677(1)",
    "斗六": "20679(1)",
    "斗南": "20680(1)",
    "新營": "20688(1)",
    "柳營": "20689(1)",
    "沙崙": "28104(1)",
    "永康": "20695(1)",
    "新市": "20694(1)",
    "善化": "20693(1)",
    "楠梓": "20703(1)",
    "岡山": "20701(1)",
    "鳳山": "20727(1)",
    "大湖": "20699(1)",
    "林邊": "20740(1)",
    "蘇澳": "20777(1)",
    "東澳": "20780(1)",
    "新城": "20787(1)",
    "吉安": "20791(1)",
    "壽豐": "20794(1)",
    "富源": "20801(1)",
    "玉里": "20805(1)",
    "富里": "20809(1)",
    "池上": "20810(1)",
    "關山": "20812(1)",
    "鹿野": "20816(1)",
    "知本": "20830(1)",
    "大武": "20825(1)",
    "南港": "21389(1)",
    "左營": "20704(1)",
    "新": "6452(1)",
    "竹": "20650(1)",
    "南": "20695(1)",
    "港": "7205(1)",
    "東": "20817(1)",
    "西": "11879(1)",
    "北": "20636(1)",
    "中": "20665(1)",
    "大": "3543(1)",
    "頭": "24443(1)",
    "份": "2282(1)",
    "林": "20657(1)",
    "內": "2599(1)",
    "雙": "20758(1)",
    "溪": "20757(1)",
    "福": "20760(1)",
    "隆": "20762(1)",
    "暖": "20754(1)",
    "堵": "20750(1)",
    "瑞": "20756(1)",
    "芳": "20759(1)",
    "水": "20678(1)",
    "沙": "20719(1)",
    "鹿": "20722(1)",
    "田": "20674(1)",
    "員": "20671(1)",
    "斗": "20681(1)",
    "仁": "20725(1)",
    "武": "492(1)",
    "換": "8406(1)",
    "基隆": "20752(1)",
    "台北": "20637(1)",
    "臺北": "20637(1)",
    "桃園": "20643(1)",
    "新竹": "20652(1)",
    "苗栗": "20658(1)",
    "台中": "20666(1)",
    "臺中": "20666(1)",
    "彰化": "20670(1)",
    "嘉義": "20684(1)",
    "台南": "20696(1)",
    "臺南": "20696(1)",
    "高雄": "20705(1)",
    "屏東": "20731(1)",
    "台東": "20818(1)",
    "臺東": "20818(1)",
    "花蓮": "20790(1)",
    "宜蘭": "20770(1)",
    "一_quantity": "1(1)",
    "一_digit": "2(1)",
    "二": "44(1)",
    "三": "163(1)",
    "四": "1408(1)",
    "五": "565(1)",
    "六": "578(1)",
    "七": "40(1)",
    "八": "49(1)",
    "九": "41(1)",
    "十": "54(1)",
    "兩": "3584(1)",
    "百": "2585(1)",
    "千": "180(1)",
    "早起": "2517(1)",
    "下晡": "432(1)",
    "暗時": "9598(1)",
    "點": "12451(1)",
    "半": "1387(1)",
    "分": "584(1)",
    "點鐘": "12472(1)",
    "分鐘": "768(1)",
    "箍": "10682(1)",
    "火車": "1242(1)",
    "捷運": "11513(1),10146(1)",
    "公車": "23445(1)",
    "鐵馬": "13148(1)",
    "船": "7784(1)",
    "計程車": "5537(1)",
    "高鐵": "24834(1)",
    "月台": "24426(1)",
    "火車頭": "13946(1)",
    "車廂": "23725(1)",
    "車票": "3459(1)",
    "司機": "1608(1)",
    "鐵路": "24177(1)",
    "飛行機": "5591(1)",
    "口": "183(1)",
    "賣": "11390(1)",
    "票": "7683(1)",
    "自強": "2721(1)",
    "號": "9978(1)",
    "區間": "25732(1)",
    "車": "3394(1)",
    "我": "3139(1)",
    "欲": "7469(1)",
    "去": "1395(1)",
    "買": "9037(1)",
    "張": "7179(1)",
    "開車": "9170(1)",
    "攏總": "12790(1)",
    "佇": "2858(1)",
    "第": "7691(1)",
    "第一": "7693(1)",
    "等": "8817(1)",
    "著": "8981(1)",
    "矣": "3336(1)",
    "毋著": "1089(1)",
    "喔": "8172(1)",
    "對": "10442(1)",
    "同": "2115(1)",
    "綠線": "8086(1),8151(1)",
    "列車": "2107(1),3394(1)",
    "中捷": "20665(1),11513(1)",
    "台中捷運": "20665(1),1406(1),11513(1),10146(1)",
    "高鐵台中站": "24834(1),20666(1),6427(1)",
    "第一月台": "7693(1),24426(1)",
    "第二月台": "1307(1),44(1),24426(1)"
};

// Grammar words audio IDs
const G_GUA = "3139(1)"; // 我 (gua2)
const G_BEH = "7469(1)"; // 欲 (beh4)
const G_TUI = "10442(1)"; // 對 (tui3)
const G_KHI = "1395(1)"; // 去 (khi3)
const G_BE = "3056(1)";  // 買 (be2)
const G_TIUNN = "7179(1)"; // 張 (tiunn1)
const G_PHIO = "7683(1)"; // 票 (phio3)
const G_TI = "2858(1)";   // 佇 (ti7)
const G_TE = "1307(1)";   // 第 (te7)
const G_GUEH = "803(1)";  // 月 (gueh8)
const G_TAI = "1406(1)";  // 台 (tai5)
const G_TAH = "11395(1)"; // 搭 (tah8)
const G_TSHIA = "3394(1)"; // 車 (tshia1)
const G_ONG = "3878(1)";  // 往 (ong2)
const G_E = "171(1)";    // 的 (e5)
const G_HONG = "800(1)";  // 方 (hong1)
const G_HIONG = "2122(1)"; // 向 (hiong3)
const G_TO = "50(1)";    // 多 (to1)
const G_SIA = "4377(1)";  // 謝 (sia7)
const G_KAP = "2112(1)";  // 及 (kap4)
const G_PUAN = "1386(1)"; // 半 (puan3)

// Numbers 1-10 IDs
const numAudioMap = {
    1: ["1(1)"],      // tsit8 / it1
    2: ["2953(1)"],   // nn̄g
    3: ["163(1)"],    // sann1
    4: ["1293(1)"],   // sì
    5: ["565(1)"],    // gōo
    6: ["578(1)"],    // la̍k
    7: ["40(1)"],     // tshit8 (tshit4 fallback)
    8: ["1850(1)"],   // peh8
    9: ["41(1)"],     // káu
    10: ["54(1)"]     // tsa̍p
};

// Time periods
const periodAudioMap = {
    "morning": ["2435(1)", "6671(1)"], // tsa2-khi2 (早上)
    "afternoon": ["167(1)", "5857(1)"], // e7-poo1 (下午)
    "night": ["7311(1)", "6006(1)"] // am1-si5 (晚上)
};

// Pronunciation mappings for clock trainer
const clockNumbersMap = {
    1: ["1(1)"],
    2: ["2953(1)"], // nn̄g tiám
    3: ["163(1)"],
    4: ["1293(1)"],
    5: ["565(1)"],
    6: ["578(1)"],
    7: ["40(1)"],
    8: ["1850(1)"],
    9: ["41(1)"],
    10: ["54(1)"],
    11: ["54(1)", "1(1)"], // tsa̍p-it
    12: ["54(1)", "2953(1)"], // tsa̍p-jī
    0: ["54(1)", "2953(1)"]
};

// Minutes mapping
function getMinuteAudioIds(m) {
    if (m === 0) return [];
    if (m === 15) return ["54(1)", "565(1)", "584(1)"]; // tsa̍p-gōo hun
    if (m === 30) return [G_PUAN]; // puàn
    if (m === 45) return ["1293(1)", "54(1)", "565(1)", "584(1)"]; // sì-tsa̍p-gōo hun
    
    // general number synthesis
    let ids = [];
    if (m < 10) {
        ids = ids.concat(numAudioMap[m]);
    } else if (m === 10) {
        ids.push("54(1)");
    } else if (m < 20) {
        ids.push("54(1)");
        ids = ids.concat(numAudioMap[m - 10]);
    } else {
        let tens = Math.floor(m / 10);
        let ones = m % 10;
        
        if (tens === 2) {
            ids.push("44(1)"); // jī-tsa̍p
        } else {
            ids = ids.concat(numAudioMap[tens]);
            ids.push("54(1)");
        }
        
        if (ones > 0) {
            ids = ids.concat(numAudioMap[ones]);
        }
    }
    ids.push("584(1)"); // hun1
    return ids;
}

// Global speech rate
let speechRate = 1.0;
let activeAudio = null;
let activeQueueAudio = null;
let queueCancelToken = 0;

function updateSpeechRate(val) {
    speechRate = parseFloat(val);
    localStorage.setItem("app_speech_rate", val);
}

function updateSpeechRateLabel(val) {
    document.getElementById("speech-rate-label").textContent = parseFloat(val).toFixed(1) + "x";
}

// Global state variables
let passengers = 1;
let selectedStart = "beitun";
let selectedEnd = "hsrstation";
let currentTab = "adventure";

// ==========================================
// 5. 語音朗讀核心引擎 (TTS Engine & Web Audio Seamless Queue)
// ==========================================
let audioCtx = null;
const audioBufferCache = new Map();
let activeSourceNodes = [];

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Silence trimmer to remove leading/trailing silence from raw dictionary audio
function trimAudioBuffer(buffer, ctx, threshold = 0.012) {
    if (!buffer || !ctx) return buffer;
    const channelData = buffer.getChannelData(0);
    let start = 0;
    while (start < channelData.length && Math.abs(channelData[start]) < threshold) {
        start++;
    }
    let end = channelData.length - 1;
    while (end > start && Math.abs(channelData[end]) < threshold) {
        end--;
    }
    const margin = Math.floor(buffer.sampleRate * 0.005); // 5ms soft edge
    start = Math.max(0, start - margin);
    end = Math.min(channelData.length, end + margin);
    
    if (end <= start) return buffer;
    
    const trimmedLen = end - start;
    const trimmedBuffer = ctx.createBuffer(buffer.numberOfChannels, trimmedLen, buffer.sampleRate);
    for (let i = 0; i < buffer.numberOfChannels; i++) {
        trimmedBuffer.copyToChannel(buffer.getChannelData(i).subarray(start, end), i);
    }
    return trimmedBuffer;
}

async function fetchAudioBuffer(id, ctx) {
    const cleanId = id.trim();
    if (audioBufferCache.has(cleanId)) {
        return audioBufferCache.get(cleanId);
    }
    const cdnUrl = `https://chhoetaigi.github.io/KipSutianDataMirror/public/20261019-0109/imtong/sutiau/${cleanId}.mp3`;
    const res = await fetch(cdnUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const decoded = await ctx.decodeAudioData(arrayBuffer);
    const trimmed = trimAudioBuffer(decoded, ctx);
    audioBufferCache.set(cleanId, trimmed);
    return trimmed;
}

function stopAllActiveAudio() {
    activeSourceNodes.forEach(node => {
        try { node.stop(); } catch(e){}
    });
    activeSourceNodes = [];
    if (activeAudio) { activeAudio.pause(); activeAudio = null; }
    if (activeQueueAudio) { activeQueueAudio.pause(); activeQueueAudio = null; }
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); }
}

function updateBadge(type) {
    const badge = document.getElementById("speech-engine-badge");
    if (!badge) return;
    if (type === "google") {
        badge.className = "speech-badge badge-google";
        badge.textContent = "🔊 實體台語 (教育部)";
    } else {
        badge.className = "speech-badge badge-local";
        badge.textContent = "🔊 離線備援 (Web Speech)";
    }
}

// Play offline fallback using speech synthesis
function playOfflineVoiceFallback(text) {
    updateBadge("local");
    stopAllActiveAudio();
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        let cleanText = text;
        const homophoneMap = {
            "北屯總站": "北屯總站", "舊社": "舊社", "松竹": "松竹", "四維國小": "四維國小",
            "文心崇德": "文心崇德", "文心中清": "文心中清", "文華高中": "文華高中", "文心櫻花": "文心櫻花",
            "市政府": "市政府", "水安宮": "水安宮", "文心森林公園": "文心森林公園", "南屯": "南屯",
            "豐樂公園": "豐樂公園", "大慶": "大慶", "九張犁": "九張犁", "九德": "九德",
            "烏日": "烏日", "高鐵台中站": "高鐵台中站",
            "我": "哇", "欲": "邁", "去": "ㄎㄧ", "買": "美", "張": "丟", 
            "票": "ㄆㄧㄡ", "佇": "底", "第": "ㄉㄟˇ", "第一月台": "第一威台", "第二月台": "第二威台", 
            "月台": "威台", "搭車": "搭掐", "往": "網", "的方向": "ㄟ烘向", "多謝": "多夏"
        };
        
        for (let key in homophoneMap) {
            cleanText = cleanText.split(key).join(homophoneMap[key]);
        }
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = speechRate;
        utterance.lang = "zh-TW";
        
        const voices = window.speechSynthesis.getVoices();
        const nanVoice = voices.find(v => v.lang.includes("nan") || v.lang.includes("min"));
        if (nanVoice) {
            utterance.voice = nanVoice;
            utterance.lang = nanVoice.lang;
        }
        
        window.speechSynthesis.speak(utterance);
    }
}

// Seamless gapless playback of audio ID list using Web Audio API scheduling
async function playAudioQueue(audioIds, fallbackText) {
    const token = ++queueCancelToken;
    stopAllActiveAudio();

    const speed = speechRate;
    const cleanIds = audioIds.filter(id => id && typeof id === 'string' && id.trim().length > 0);
    
    if (cleanIds.length === 0) {
        playOfflineVoiceFallback(fallbackText);
        return;
    }

    const ctx = getAudioContext();
    if (ctx) {
        try {
            updateBadge("google");
            // Parallel download & decode of all clips
            const bufferPromises = cleanIds.map(id => 
                fetchAudioBuffer(id.trim(), ctx).catch(err => {
                    console.warn(`Audio fetch failed for ID ${id}`, err);
                    return null;
                })
            );
            const buffers = await Promise.all(bufferPromises);
            
            if (token !== queueCancelToken) return;
            
            const validBuffers = buffers.filter(b => b !== null);
            if (validBuffers.length === 0) {
                playOfflineVoiceFallback(fallbackText);
                return;
            }
            
            // Seamless buffer scheduling with natural inter-syllable timing
            let nextStartTime = ctx.currentTime + 0.05;
            const interWordGap = 0.022 / speed; // 22ms base gap, scales with speechRate
            
            for (let i = 0; i < validBuffers.length; i++) {
                const buf = validBuffers[i];
                const source = ctx.createBufferSource();
                source.buffer = buf;
                source.playbackRate.value = speed;
                source.connect(ctx.destination);
                
                source.start(nextStartTime);
                activeSourceNodes.push(source);
                
                const clipDuration = buf.duration / speed;
                nextStartTime += clipDuration + interWordGap;
                
                if (i === validBuffers.length - 1) {
                    source.onended = () => {
                        if (token === queueCancelToken) {
                            activeSourceNodes = [];
                        }
                    };
                }
            }
            return;
        } catch (e) {
            console.warn("Web Audio API scheduling error, falling back to sequential HTML5 Audio...", e);
        }
    }

    // Fallback: Preloaded HTML5 Audio sequential playback if Web Audio API fails
    updateBadge("google");
    let index = 0;
    function playNext() {
        if (token !== queueCancelToken) return;
        if (index >= cleanIds.length) return;
        
        const id = cleanIds[index].trim();
        const cdnUrl = `https://chhoetaigi.github.io/KipSutianDataMirror/public/20261019-0109/imtong/sutiau/${id}.mp3`;
        
        const audio = new Audio(cdnUrl);
        activeQueueAudio = audio;
        audio.playbackRate = speed;
        
        // Preload next audio in queue to reduce lag
        if (index + 1 < cleanIds.length) {
            const nextUrl = `https://chhoetaigi.github.io/KipSutianDataMirror/public/20261019-0109/imtong/sutiau/${cleanIds[index + 1].trim()}.mp3`;
            const preAudio = new Audio(nextUrl);
            preAudio.preload = "auto";
        }
        
        audio.onended = () => {
            if (token !== queueCancelToken) return;
            index++;
            playNext();
        };
        
        audio.onerror = (e) => {
            console.warn(`Audio error for ${id}, skipping to next...`, e);
            if (token !== queueCancelToken) return;
            index++;
            if (index < cleanIds.length) playNext();
            else playOfflineVoiceFallback(fallbackText);
        };
        
        audio.play().catch(err => {
            console.warn(`Audio play failed for ${id}, skipping to next...`, err);
            if (token !== queueCancelToken) return;
            index++;
            if (index < cleanIds.length) playNext();
            else playOfflineVoiceFallback(fallbackText);
        });
    }
    playNext();
}

function preloadCommonAudio() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const preloadList = [
        G_GUA, G_BEH, G_TUI, G_KHI, G_BE, G_TIUNN, G_PHIO, G_TI, G_TE,
        "7693(1)", "44(1)", "24426(1)", G_TAH, G_TSHIA, G_ONG, G_E, G_HONG, G_HIONG, G_TO, G_SIA,
        "24834(1)", "20666(1)", "6427(1)", "1385(1)", "9142(1)", "12252(1)"
    ];
    preloadList.forEach(id => {
        if (id) fetchAudioBuffer(id, ctx).catch(() => {});
    });
}

// Play Taigi TTS based on phrase or ID mapping
function playTaigiTTS(phraseText, audioIds) {
    let ids = [];
    if (Array.isArray(audioIds)) {
        ids = audioIds;
    } else if (typeof audioIds === 'string') {
        if (/\d+/.test(audioIds)) {
            if (audioIds.includes(',')) {
                ids = audioIds.split(',');
            } else {
                ids = [audioIds];
            }
        } else {
            const cleanPhrase = phraseText.replace(/[【】]/g, '');
            // Try whole phrase first
            const mappedId = taigiAudioMap[cleanPhrase];
            if (mappedId) {
                if (Array.isArray(mappedId)) {
                    ids = mappedId;
                } else if (typeof mappedId === 'string' && mappedId.includes(',')) {
                    ids = mappedId.split(',');
                } else {
                    ids = [mappedId];
                }
            } else {
                // Character-by-character fallback
                for (let char of cleanPhrase) {
                    const charId = taigiAudioMap[char];
                    if (charId) {
                        if (charId.includes(',')) {
                            ids = ids.concat(charId.split(','));
                        } else {
                            ids.push(charId);
                        }
                    }
                }
            }
        }
    }
    
    if (ids.length > 0) {
        playAudioQueue(ids, phraseText);
    } else {
        playOfflineVoiceFallback(phraseText);
    }
}

// ==========================================
// 6. 購票與路徑計算 (Journey calculations)
// ==========================================
function populateStationSelectors() {
    const startSelect = document.getElementById("start-station");
    const endSelect = document.getElementById("end-station");
    if (!startSelect || !endSelect) return;
    
    startSelect.innerHTML = "";
    endSelect.innerHTML = "";
    
    stations.forEach(s => {
        const opt1 = document.createElement("option");
        opt1.value = s.id;
        opt1.textContent = `${s.nameZH} (${s.nameEN})`;
        startSelect.appendChild(opt1);
        
        const opt2 = document.createElement("option");
        opt2.value = s.id;
        opt2.textContent = `${s.nameZH} (${s.nameEN})`;
        endSelect.appendChild(opt2);
    });
    
    startSelect.value = "beitun";
    endSelect.value = "hsrstation";
}

function changePassengers(delta) {
    passengers = Math.max(1, Math.min(10, passengers + delta));
    document.getElementById("passenger-count").textContent = passengers;
    calculateJourney();
}

function calculateJourney() {
    selectedStart = document.getElementById("start-station").value;
    selectedEnd = document.getElementById("end-station").value;
    
    const startIndex = stations.findIndex(s => s.id === selectedStart);
    const endIndex = stations.findIndex(s => s.id === selectedEnd);
    
    if (startIndex === -1 || endIndex === -1) return;
    
    const startStation = stations[startIndex];
    const endStation = stations[endIndex];
    
    // Direction & Platform
    let directionStr = "";
    let platformNum = "1";
    let directionDest = "";
    
    if (startIndex === endIndex) {
        directionStr = currentLang === "zh" ? "無 (原地起訖)" : "None";
        platformNum = "-";
        document.getElementById("play-journey-btn").disabled = true;
    } else if (endIndex > startIndex) {
        // Towards HSR Taichung Station (Platform 2)
        directionDest = "高鐵台中站";
        directionStr = currentLang === "zh" ? "往高鐵台中站方向" : "Bound for HSR Taichung Station";
        platformNum = "2";
        document.getElementById("play-journey-btn").disabled = false;
    } else {
        // Towards Beitun Main Station (Platform 1)
        directionDest = "北屯總站";
        directionStr = currentLang === "zh" ? "往北屯總站方向" : "Bound for Beitun Main Station";
        platformNum = "1";
        document.getElementById("play-journey-btn").disabled = false;
    }
    
    const stopsCount = Math.abs(endIndex - startIndex);
    
    // Ticket Price Calculation
    // Base 20 NT$ (up to 4 stops), then +5 NT$ for every 3 stops, max 50.
    let baseFare = 20;
    if (stopsCount > 0) {
        baseFare = 20 + 5 * Math.floor((stopsCount - 1) / 3);
        if (baseFare > 50) baseFare = 50;
    } else {
        baseFare = 0;
    }
    
    const ticketType = document.getElementById("train-class").value;
    let singleFare = baseFare;
    if (ticketType === "card") {
        singleFare = Math.round(baseFare * 0.8);
    }
    
    const totalCost = singleFare * passengers;
    
    // Update labels
    document.getElementById("info-direction").textContent = directionStr;
    document.getElementById("info-duration").textContent = stopsCount + " " + (currentLang === "zh" ? "站" : "Stops");
    document.getElementById("info-cost").textContent = "NT$ " + totalCost;
    document.getElementById("info-platform").textContent = platformNum + " " + (currentLang === "zh" ? "月台" : "Platform");
    
    let zhSentence = `我欲對【${startStation.nameZH}】去【${endStation.nameZH}】，買【${passengers}】張票，佇第【${platformNum}】月台搭車，往【${directionDest}】的方向，多謝。`;
    if (startIndex === endIndex) {
        zhSentence = "起點站與終點站相同，請重新選擇。";
    }
    
    let enSentence = `I want to go from ${startStation.nameEN} to ${endStation.nameEN}, buy ${passengers} ticket(s), board at Platform ${platformNum} towards ${endStation.nameEN}, thank you.`;
    
    document.getElementById("journey-sentence-zh").textContent = currentLang === "zh" ? zhSentence : enSentence;
    
    // Build Pinyin representation
    const numPojMap = { 1: "tsit8", 2: "nng7", 3: "sann1", 4: "si3", 5: "goo7", 6: "lak8", 7: "tshit8", 8: "peh8", 9: "kau2", 10: "tsap8" };
    const startPoj = startStation.poj;
    const endPoj = endStation.poj;
    const numPoj = numPojMap[passengers] || "tsit8";
    const dirPoj = directionDest === "高鐵台中站" ? "Ko-thih Tâi-tiong Tsām" : "Pak-tūn Tsóng-tsām";
    
    const twSentence = `Goá beh tuì ${startPoj} khì ${endPoj}, bé ${numPoj} tiunn phiò, tī tē ${platformNum} gue̍h-tâi tah-tshia, óng ${dirPoj} ê hong-hiòng, to-siā.`;
    document.getElementById("journey-sentence-tw").innerHTML = startIndex === endIndex ? "" : twSentence;
    
    highlightNodesAndPath(startIndex, endIndex);
}

function highlightNodesAndPath(startIndex, endIndex) {
    stations.forEach(st => {
        const node = document.getElementById(`svg-node-${st.id}`);
        if (node) node.classList.remove("active");
    });
    
    const activePath = document.getElementById("svg-rail-active-path");
    if (!activePath) return;
    
    if (startIndex === endIndex) {
        activePath.setAttribute("d", "");
        document.getElementById("train-marker").style.display = "none";
        return;
    }
    
    const startNode = stations[startIndex];
    let dPath = `M ${startNode.cx},${startNode.cy}`;
    
    const step = startIndex < endIndex ? 1 : -1;
    for (let i = startIndex + step; i !== endIndex + step; i += step) {
        const node = stations[i];
        dPath += ` L ${node.cx},${node.cy}`;
        const el = document.getElementById(`svg-node-${node.id}`);
        if (el) el.classList.add("active");
    }
    
    const startEl = document.getElementById(`svg-node-${startNode.id}`);
    if (startEl) startEl.classList.add("active");
    
    activePath.setAttribute("d", dPath);
    
    activePath.style.animation = 'none';
    activePath.offsetHeight;
    activePath.style.animation = 'drawPath 1.2s ease-out forwards';
    
    const train = document.getElementById("train-marker");
    if (train) {
        train.style.display = "block";
        let progress = 0;
        const totalSteps = 60;
        
        function moveTrain() {
            const pathLength = activePath.getTotalLength();
            if (pathLength === 0) return;
            const distance = (progress / totalSteps) * pathLength;
            const point = activePath.getPointAtLength(distance);
            
            // Calculate tangent angle so train faces forward along the track
            const nextDist = Math.min(pathLength, distance + 2);
            const nextPoint = activePath.getPointAtLength(nextDist);
            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
            
            train.setAttribute("transform", `translate(${point.x}, ${point.y}) rotate(${angle})`);
            
            progress++;
            if (progress <= totalSteps) {
                requestAnimationFrame(moveTrain);
            }
        }
        moveTrain();
    }
}

function playFullJourneyAudio() {
    const startIndex = stations.findIndex(s => s.id === selectedStart);
    const endIndex = stations.findIndex(s => s.id === selectedEnd);
    if (startIndex === -1 || endIndex === -1 || startIndex === endIndex) return;
    
    const startStation = stations[startIndex];
    const endStation = stations[endIndex];
    const directionDest = endIndex > startIndex ? "高鐵台中站" : "北屯總站";
    const platformNum = endIndex > startIndex ? "2" : "1";
    
    let ids = [];
    ids.push(G_GUA);
    ids.push(G_BEH);
    ids.push(G_TUI);
    ids = ids.concat(startStation.audioId.split(","));
    ids.push(G_KHI);
    ids = ids.concat(endStation.audioId.split(","));
    ids.push(G_BE);
    ids = ids.concat(numAudioMap[passengers]);
    ids.push(G_TIUNN);
    ids.push(G_PHIO);
    ids.push(G_TI);
    if (platformNum === "1") {
        ids.push("7693(1)"); // 第一 (tē-it)
    } else {
        ids.push(G_TE);      // 第 (tē)
        ids.push("44(1)");   // 二 (jī)
    }
    ids.push("24426(1)");   // 月台 (gue̍h-tâi)
    ids.push(G_TAH);
    ids.push(G_TSHIA);
    ids.push(G_ONG);
    const dirStation = stations.find(s => s.nameZH === directionDest);
    ids = ids.concat(dirStation.audioId.split(","));
    ids.push(G_E);
    ids.push(G_HONG);
    ids.push(G_HIONG);
    ids.push(G_TO);
    ids.push(G_SIA);
    
    const phraseText = document.getElementById("journey-sentence-zh").textContent;
    playAudioQueue(ids, phraseText);
}

// ==========================================
// 7. 互動式地圖渲染 (SVG Rendering)
// ==========================================
function renderMRTMap() {
    const railTrack = document.getElementById("svg-rail-track");
    const railTrackDashed = document.getElementById("svg-rail-track-dashed");
    const stationsGroup = document.getElementById("svg-stations-group");
    if (!railTrack || !stationsGroup) return;
    
    let dPath = `M ${stations[0].cx},${stations[0].cy}`;
    for (let i = 1; i < stations.length; i++) {
        dPath += ` L ${stations[i].cx},${stations[i].cy}`;
    }
    
    railTrack.setAttribute("d", dPath);
    if (railTrackDashed) railTrackDashed.setAttribute("d", dPath);
    
    stationsGroup.innerHTML = "";
    stations.forEach(st => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        let cls = "station-point";
        if (st.transfer !== "none") cls += " transfer-node";
        group.setAttribute("class", cls);
        group.setAttribute("id", "svg-node-" + st.id);
        group.addEventListener("click", () => {
            playTaigiTTS(st.nameZH, st.audioId);
            document.getElementById("end-station").value = st.id;
            calculateJourney();
        });
        
        // Node circle
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", st.cx);
        circle.setAttribute("cy", st.cy);
        circle.setAttribute("r", st.isMain ? "7.5" : "5.5");
        circle.style.stroke = "#2ECC71";
        
        // Transfer badge if applicable
        if (st.transfer !== "none") {
            const badgeG = document.createElementNS("http://www.w3.org/2000/svg", "g");
            const badgeBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            const badgeTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
            
            const isHSR = st.transfer.includes("HSR");
            const fillCol = isHSR ? "#e67e22" : "#2980b9";
            const lbl = isHSR ? "高鐵+台鐵" : "台鐵";
            const badgeWidth = isHSR ? 48 : 28;
            
            let bx = st.cx - (badgeWidth / 2);
            let by = st.cy + 12;
            if (st.labelPos && st.labelPos.dy > 10) {
                // If label is below, place badge above
                by = st.cy - 22;
            } else if (st.labelPos && st.labelPos.dy < -5) {
                // If label is above, place badge below
                by = st.cy + 10;
            }
            
            badgeBg.setAttribute("x", bx);
            badgeBg.setAttribute("y", by);
            badgeBg.setAttribute("width", badgeWidth);
            badgeBg.setAttribute("height", "14");
            badgeBg.setAttribute("rx", "4");
            badgeBg.setAttribute("fill", fillCol);
            badgeBg.setAttribute("opacity", "0.9");
            
            badgeTxt.setAttribute("x", bx + (badgeWidth / 2));
            badgeTxt.setAttribute("y", by + 10.5);
            badgeTxt.setAttribute("text-anchor", "middle");
            badgeTxt.setAttribute("font-size", "8.5");
            badgeTxt.setAttribute("font-weight", "900");
            badgeTxt.setAttribute("fill", "#ffffff");
            badgeTxt.textContent = lbl;
            
            badgeG.appendChild(badgeBg);
            badgeG.appendChild(badgeTxt);
            group.appendChild(badgeG);
        }
        
        // Station text with halo background
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        const lx = st.cx + (st.labelPos ? st.labelPos.dx : 14);
        const ly = st.cy + (st.labelPos ? st.labelPos.dy : 4);
        const anchor = st.labelPos ? st.labelPos.anchor : "start";
        
        text.setAttribute("x", lx);
        text.setAttribute("y", ly);
        text.setAttribute("text-anchor", anchor);
        
        if (!st.isMain) {
            text.setAttribute("class", "small-station-lbl");
        }
        
        text.textContent = st.nameZH;
        
        group.appendChild(circle);
        group.appendChild(text);
        stationsGroup.appendChild(group);
    });
}

// ==========================================
// 8. 詞彙牆 (Vocabulary Wall)
// ==========================================
function renderVocabWall() {
    const vocabContainer = document.getElementById("vocab-container");
    vocabContainer.innerHTML = "";
    
    let fullVocabList = [...vocabData];
    stations.forEach(st => {
        let isTrans = st.transfer !== "none" ? "mrt-transfer" : "mrt-local";
        fullVocabList.push({
            zh: st.nameZH,
            en: st.nameEN,
            tw: st.poj,
            type: "mrt-station",
            audioId: st.audioId,
            emoji: st.stamp,
            subType: isTrans
        });
    });
    
    fullVocabList.forEach(item => {
        const card = document.createElement("div");
        card.className = `vocab-card vocab-type-${item.type}`;
        if (item.subType) card.className += ` ${item.subType}`;
        card.addEventListener("click", () => playTaigiTTS(item.zh, item.audioId));
        
        card.innerHTML = `
            <span class="vocab-emoji">${item.emoji}</span>
            <div class="vocab-zh">${item.zh}</div>
            <div class="vocab-pinyin">${item.tw}</div>
            <div class="vocab-en">${item.en}</div>
        `;
        vocabContainer.appendChild(card);
    });
}

function filterVocab(type) {
    document.querySelectorAll(".vocab-filter .filter-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`btn-filter-${type}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    if (type === "all") {
        document.querySelectorAll(".vocab-card").forEach(card => card.style.display = "flex");
    } else if (type === "vehicles") {
        document.querySelectorAll(".vocab-card").forEach(card => {
            card.style.display = card.classList.contains("vocab-type-vehicles") ? "flex" : "none";
        });
    } else if (type === "stations") {
        document.querySelectorAll(".vocab-card").forEach(card => {
            card.style.display = card.classList.contains("vocab-type-stations") ? "flex" : "none";
        });
    } else if (type === "mrt-station") {
        document.querySelectorAll(".vocab-card").forEach(card => {
            card.style.display = card.classList.contains("vocab-type-mrt-station") ? "flex" : "none";
        });
    }
}

// ==========================================
// 9. 時間鐘點師 (Clock Trainer)
// ==========================================
let currentHour = 15;
let currentMin = 30;
let isDraggingHour = false;
let isDraggingMin = false;

function initClock() {
    const clock = document.getElementById("interactive-clock");
    if (!clock) return;
    
    clock.addEventListener("mousedown", handleClockStart);
    window.addEventListener("mousemove", handleClockMove);
    window.addEventListener("mouseup", handleClockEnd);
    
    clock.addEventListener("touchstart", handleClockStart, {passive: false});
    window.addEventListener("touchmove", handleClockMove, {passive: false});
    window.addEventListener("touchend", handleClockEnd);
    
    updateClockUI();
}

function handleClockStart(e) {
    const rect = document.getElementById("interactive-clock").getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const dx = clientX - cx;
    const dy = clientY - cy;
    const distance = Math.sqrt(dx*dx + dy*dy);
    
    if (distance > 30 && distance < 70) {
        isDraggingHour = true;
        e.preventDefault();
    } else if (distance >= 70 && distance < 110) {
        isDraggingMin = true;
        e.preventDefault();
    }
}

function handleClockMove(e) {
    if (!isDraggingHour && !isDraggingMin) return;
    e.preventDefault();
    
    const rect = document.getElementById("interactive-clock").getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const dx = clientX - cx;
    const dy = clientY - cy;
    
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    
    if (isDraggingHour) {
        let hr = Math.round(angle / 30);
        if (hr === 0) hr = 12;
        if (currentHour >= 12) {
            currentHour = hr === 12 ? 12 : hr + 12;
        } else {
            currentHour = hr === 12 ? 0 : hr;
        }
    } else if (isDraggingMin) {
        let mn = Math.round(angle / 6);
        mn = Math.round(mn / 5) * 5;
        if (mn === 60) mn = 0;
        currentMin = mn;
    }
    
    updateClockUI();
}

function handleClockEnd() {
    isDraggingHour = false;
    isDraggingMin = false;
}

function adjustClockTime(deltaMins) {
    let totalMins = currentHour * 60 + currentMin + deltaMins;
    if (totalMins < 0) totalMins += 24 * 60;
    totalMins = totalMins % (24 * 60);
    
    currentHour = Math.floor(totalMins / 60);
    currentMin = totalMins % 60;
    
    updateClockUI();
}

function setClockTime(h, m) {
    currentHour = h;
    currentMin = m;
    updateClockUI();
    playClockAudio();
}

function updateClockUI() {
    const padH = String(currentHour).padStart(2, '0');
    const padM = String(currentMin).padStart(2, '0');
    document.getElementById("clock-time-digital").textContent = `${padH}:${padM}`;
    
    const hourHand = document.getElementById("clock-hour-hand");
    const minHand = document.getElementById("clock-min-hand");
    
    const minAngle = currentMin * 6;
    const hourAngle = (currentHour % 12) * 30 + currentMin * 0.5;
    
    hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minAngle}deg)`;
    
    const timeText = getTaigiTimeText(currentHour, currentMin);
    document.getElementById("clock-time-tw").innerHTML = `${timeText.zh}<br><small>${timeText.poj}</small>`;
}

function getTaigiTimeText(h, m) {
    let periodZh = "早上";
    let periodPoj = "tsá-khí";
    
    if (h >= 12 && h < 18) {
        periodZh = "下午";
        periodPoj = "ē-po͘";
    } else if (h >= 18 || h < 5) {
        periodZh = "晚上";
        periodPoj = "am-sî";
    }
    
    let hr12 = h % 12;
    if (hr12 === 0) hr12 = 12;
    
    const numZhList = { 1: "一點", 2: "兩點", 3: "三點", 4: "四點", 5: "五點", 6: "六點", 7: "七點", 8: "八點", 9: "九點", 10: "十點", 11: "十一點", 12: "十二點" };
    const numPojList = { 1: "tsı̍t tiám", 2: "nn̄g tiám", 3: "sann tiám", 4: "sì tiám", 5: "gōo tiám", 6: "la̍k tiám", 7: "tshit tiám", 8: "peh tiám", 9: "káu tiám", 10: "tsa̍p tiám", 11: "tsa̍p-it tiám", 12: "tsa̍p-jī tiám" };
    
    let hrZh = numZhList[hr12];
    let hrPoj = numPojList[hr12];
    
    let minZh = "整";
    let minPoj = "tsiann";
    
    if (m === 15) {
        minZh = "十五分";
        minPoj = "tsa̍p-gōo hun";
    } else if (m === 30) {
        minZh = "半";
        minPoj = "puàn";
    } else if (m === 45) {
        minZh = "四十五分";
        minPoj = "sì-tsa̍p-gōo hun";
    } else if (m > 0) {
        const minsZhList = { 5: "零五分", 10: "十分", 20: "二十分", 25: "二十五分", 35: "三十五分", 40: "四十分", 50: "五十分", 55: "五十五分" };
        const minsPojList = { 
            5: "lîng-gōo hun", 10: "tsa̍p hun", 20: "jī-tsa̍p hun", 25: "jī-tsa̍p-gōo hun",
            35: "sann-tsa̍p-gōo hun", 40: "sì-tsa̍p hun", 50: "gōo-tsa̍p hun", 55: "gōo-tsa̍p-gōo hun"
        };
        minZh = minsZhList[m] || (m + "分");
        minPoj = minsPojList[m] || (m + " hun");
    }
    
    return {
        zh: `${periodZh}${hrZh}${minZh}`,
        poj: `${periodPoj} ${hrPoj} ${minPoj}`
    };
}

function playClockAudio() {
    let ids = [];
    let period = "morning";
    if (currentHour >= 12 && currentHour < 18) period = "afternoon";
    else if (currentHour >= 18 || currentHour < 5) period = "night";
    
    ids = ids.concat(periodAudioMap[period]);
    
    let hr12 = currentHour % 12;
    if (hr12 === 0) hr12 = 12;
    ids = ids.concat(clockNumbersMap[hr12]);
    ids.push("12451(1)"); // tiám
    
    if (currentMin > 0) {
        ids = ids.concat(getMinuteAudioIds(currentMin));
    } else {
        ids.push("2425(1)"); // tsiann (整)
    }
    
    const timeText = getTaigiTimeText(currentHour, currentMin);
    playAudioQueue(ids, timeText.zh);
}

// ==========================================
// 10. 台語大檢定 (Challenge Mode)
// ==========================================
let quizMode = "seller";
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizTimer = null;
let quizTimeRemaining = 20;
let activeQuestionData = null;

function startQuiz(mode) {
    quizMode = mode;
    currentQuestionIndex = 0;
    quizScore = 0;
    
    document.getElementById("quiz-welcome-panel").style.display = "none";
    document.getElementById("quiz-result-panel").style.display = "none";
    document.getElementById("quiz-game-panel").style.display = "block";
    
    generateQuestions();
    showQuestion();
}

function generateQuestions() {
    quizQuestions = [];
    for (let i = 0; i < 10; i++) {
        if (quizMode === "seller") {
            let startIdx = Math.floor(Math.random() * stations.length);
            let endIdx = Math.floor(Math.random() * (stations.length - 1));
            if (endIdx >= startIdx) endIdx++;
            
            let startSt = stations[startIdx];
            let endSt = stations[endIdx];
            let ticketCount = Math.floor(Math.random() * 5) + 1;
            
            let directionDest = endIdx > startIdx ? "高鐵台中站" : "北屯總站";
            let platformNum = endIdx > startIdx ? "2" : "1";
            
            let zhPrompt = `我欲對${startSt.nameZH}去${endSt.nameZH}，買${ticketCount}張票，佇第${platformNum}月台搭車，往${directionDest}的方向，多謝。`;
            
            let platformAudio = platformNum === "1" ? ["7693(1)"] : [G_TE, "44(1)"];
            let audioIds = [
                G_GUA, G_BEH, G_TUI,
                ...startSt.audioId.split(","),
                G_KHI,
                ...endSt.audioId.split(","),
                G_BE,
                ...numAudioMap[ticketCount],
                G_TIUNN, G_PHIO,
                G_TI,
                ...platformAudio,
                "24426(1)",
                G_TAH, G_TSHIA,
                G_ONG,
                ...stations.find(s => s.nameZH === directionDest).audioId.split(","),
                G_E, G_HONG, G_HIONG,
                G_TO, G_SIA
            ];
            
            let correctOption = `${endSt.nameZH}，${ticketCount}張`;
            let options = [correctOption];
            
            while (options.length < 4) {
                let randEnd = stations[Math.floor(Math.random() * stations.length)];
                let randCount = Math.floor(Math.random() * 5) + 1;
                let opt = `${randEnd.nameZH}，${randCount}張`;
                if (!options.includes(opt) && randEnd.id !== endSt.id) {
                    options.push(opt);
                }
            }
            options.sort(() => Math.random() - 0.5);
            
            quizQuestions.push({
                prompt: zhPrompt,
                audioIds: audioIds,
                options: options,
                correctAnswer: correctOption,
                rewardStamp: endSt.id
            });
        } else {
            let h = Math.floor(Math.random() * 24);
            let minsOptions = [0, 15, 30, 45];
            let m = minsOptions[Math.floor(Math.random() * minsOptions.length)];
            
            let timeText = getTaigiTimeText(h, m);
            let padH = String(h).padStart(2, '0');
            let padM = String(m).padStart(2, '0');
            let digitalStr = `${padH}:${padM}`;
            
            let ids = [];
            let period = h >= 12 && h < 18 ? "afternoon" : (h >= 18 || h < 5 ? "night" : "morning");
            ids = ids.concat(periodAudioMap[period]);
            
            let hr12 = h % 12;
            if (hr12 === 0) hr12 = 12;
            ids = ids.concat(clockNumbersMap[hr12]);
            ids.push("12451(1)"); // tiám
            
            if (m > 0) {
                ids = ids.concat(getMinuteAudioIds(m));
            } else {
                ids.push("2425(1)"); // tsiann
            }
            
            let correctOption = digitalStr;
            let options = [correctOption];
            
            while (options.length < 4) {
                let randH = Math.floor(Math.random() * 24);
                let randM = minsOptions[Math.floor(Math.random() * minsOptions.length)];
                let padRH = String(randH).padStart(2, '0');
                let padRM = String(randM).padStart(2, '0');
                let opt = `${padRH}:${padRM}`;
                if (!options.includes(opt) && opt !== digitalStr) {
                    options.push(opt);
                }
            }
            options.sort(() => Math.random() - 0.5);
            
            let randStation = stations[Math.floor(Math.random() * stations.length)].id;
            
            quizQuestions.push({
                prompt: `請聽語音，選出正確的數位時間：`,
                audioIds: ids,
                options: options,
                correctAnswer: correctOption,
                rewardStamp: randStation
            });
        }
    }
}

function showQuestion() {
    if (currentQuestionIndex >= 10) {
        finishQuiz();
        return;
    }
    
    activeQuestionData = quizQuestions[currentQuestionIndex];
    document.getElementById("quiz-progress-text").textContent = `問題 ${currentQuestionIndex + 1} / 10`;
    document.getElementById("quiz-score-display").textContent = `分數: ${quizScore}`;
    document.getElementById("quiz-feedback-text").textContent = "";
    
    document.getElementById("quiz-question-prompt").textContent = quizMode === "seller" 
        ? "請點擊按鈕聆聽旅客購票需求：" 
        : "請點擊按鈕聆聽捷運班次時間：";
        
    const container = document.getElementById("quiz-options-container");
    container.innerHTML = "";
    
    activeQuestionData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => checkAnswer(btn, opt));
        container.appendChild(btn);
    });
    
    playQuizQuestionAudio();
    startQuizTimer();
}

function playQuizQuestionAudio() {
    if (activeQuestionData) {
        playAudioQueue(activeQuestionData.audioIds, activeQuestionData.prompt);
    }
}

function startQuizTimer() {
    if (quizTimer) clearInterval(quizTimer);
    quizTimeRemaining = 20;
    
    const bar = document.getElementById("quiz-timer-bar");
    const display = document.getElementById("quiz-timer-display");
    
    bar.style.width = "100%";
    display.textContent = `剩餘: 20s`;
    
    quizTimer = setInterval(() => {
        quizTimeRemaining--;
        display.textContent = `剩餘: ${quizTimeRemaining}s`;
        bar.style.width = `${(quizTimeRemaining / 20) * 100}%`;
        
        if (quizTimeRemaining <= 0) {
            clearInterval(quizTimer);
            handleTimeOut();
        }
    }, 1000);
}

function checkAnswer(selectedBtn, answer) {
    if (quizTimer) clearInterval(quizTimer);
    
    const isCorrect = answer === activeQuestionData.correctAnswer;
    const feedback = document.getElementById("quiz-feedback-text");
    
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === activeQuestionData.correctAnswer) {
            btn.classList.add("correct");
        }
    });
    
    if (isCorrect) {
        quizScore++;
        feedback.textContent = "🎉 答對了！ Tùi--ah!";
        feedback.style.color = "#2ECC71";
    } else {
        selectedBtn.classList.add("wrong");
        feedback.textContent = `❌ 答錯了！答案是: ${activeQuestionData.correctAnswer}`;
        feedback.style.color = "#E74C3C";
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function handleTimeOut() {
    const feedback = document.getElementById("quiz-feedback-text");
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === activeQuestionData.correctAnswer) {
            btn.classList.add("correct");
        }
    });
    
    feedback.textContent = `⏰ 時間到！答案是: ${activeQuestionData.correctAnswer}`;
    feedback.style.color = "#E67E22";
    
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function finishQuiz() {
    if (quizTimer) clearInterval(quizTimer);
    
    document.getElementById("quiz-game-panel").style.display = "none";
    document.getElementById("quiz-result-panel").style.display = "block";
    
    document.getElementById("quiz-result-score").textContent = `您的得分：${quizScore} / 10 題`;
    
    const rewardBox = document.getElementById("quiz-rewards-box");
    const title = document.getElementById("quiz-result-title");
    
    if (quizScore >= 8) {
        title.textContent = "🏆 恭喜挑戰成功！";
        title.style.color = "#2ECC71";
        rewardBox.style.display = "block";
        
        let lockedStamps = stations.filter(s => !isStampUnlocked(s.id));
        let selectedStampId = "";
        
        if (lockedStamps.length > 0) {
            let targetStamp = lockedStamps[Math.floor(Math.random() * lockedStamps.length)];
            selectedStampId = targetStamp.id;
            unlockStamp(selectedStampId);
        } else {
            selectedStampId = stations[Math.floor(Math.random() * stations.length)].id;
        }
        
        const stationObj = stations.find(s => s.id === selectedStampId);
        document.getElementById("quiz-unlocked-stamp-display").innerHTML = `
            <div class="stamp-badge">${stationObj.stamp}</div>
            <div class="stamp-name" style="font-size: 1.2rem; font-weight:800;">${stationObj.nameZH}</div>
            <div class="stamp-pinyin" style="font-size: 0.9rem;">${stationObj.poj}</div>
        `;
    } else {
        title.textContent = "😢 挑戰未成功，再接再厲！";
        title.style.color = "#E74C3C";
        rewardBox.style.display = "none";
    }
    
    renderStampsAlbum();
}

function resetQuizInterface() {
    document.getElementById("quiz-result-panel").style.display = "none";
    document.getElementById("quiz-game-panel").style.display = "none";
    document.getElementById("quiz-welcome-panel").style.display = "block";
}

// ==========================================
// 11. 我的集章冊 (Stamps Album)
// ==========================================
function isStampUnlocked(id) {
    return localStorage.getItem(`stamp_unlocked_${id}`) === "true";
}

function unlockStamp(id) {
    localStorage.setItem(`stamp_unlocked_${id}`, "true");
}

function renderStampsAlbum() {
    const container = document.getElementById("stamps-container");
    if (!container) return;
    
    container.innerHTML = "";
    stations.forEach(st => {
        const card = document.createElement("div");
        const unlocked = isStampUnlocked(st.id);
        
        card.className = `stamp-card ${unlocked ? "" : "locked"}`;
        if (unlocked) {
            card.addEventListener("click", () => playTaigiTTS(st.nameZH, st.audioId));
        }
        
        card.innerHTML = `
            <div class="stamp-badge">${unlocked ? st.stamp : "🔒"}</div>
            <div class="stamp-name">${st.nameZH}</div>
            <div class="stamp-pinyin">${unlocked ? st.poj : "未解鎖"}</div>
        `;
        
        container.appendChild(card);
    });
}

// ==========================================
// 12. 台語語音查詢表與變調對照表 (Sandhi Lookup)
// ==========================================

function filterStationTable() {
    const search = document.getElementById("station-search-input").value.toLowerCase().trim();
    const tbody = document.getElementById("station-lookup-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    stations.forEach((st, idx) => {
        if (search && !st.nameZH.includes(search) && !st.nameEN.toLowerCase().includes(search) && !st.poj.toLowerCase().includes(search)) {
            return;
        }
        
        const tr = document.createElement("tr");
        const sandhiStationPoj = getPredefinedSandhiPoj(st.id);
        
        tr.innerHTML = `
            <td><span style="background: rgba(46, 204, 113, 0.1); color: var(--primary); padding: 2px 8px; border-radius: 8px;">${103 + idx}</span></td>
            <td><strong>${st.nameZH}</strong><br><small style="color: var(--text-light);">${st.nameEN}</small></td>
            <td><span style="color: var(--text-light);">${st.poj}</span></td>
            <td><span style="color: var(--primary); font-weight:800;">${sandhiStationPoj}</span></td>
            <td>
                <button class="btn-table-play" onclick="playTaigiTTS('${st.nameZH}', '${st.audioId}')">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function getPredefinedSandhiPoj(id) {
    const sandhiMap = {
        "beitun": "Pak8-tūn5 Tsóng-tsām",
        "jiushe": "Kū5-siā",
        "songzhu": "Siōng7-tik",
        "siwei": "Sù2-uî Kok8-sió",
        "chongde": "Bûn7-sim Tsông7-tik",
        "zhongqing": "Bûn7-sim Tiong7-tshing",
        "wenhua": "Bûn7-huâ Ko7-tiong",
        "yinghua": "Bûn7-sim In7-hua",
        "cityhall": "Tshī5-tsìng-hú",
        "shuian": "Súi1-an7-king",
        "forestpark": "Bûn7-sim Sim7-lîm Kong7-hn̂g",
        "nantun": "Lâm7-tūn",
        "fengle": "Hong7-lo̍k Kong7-hn̂g",
        "daqing": "Tāi3-khìng",
        "jiuzhangli": "Káu1-tiunn7-lî",
        "jiude": "Káu1-tik",
        "wuri": "Oo7-ji̍t",
        "hsrstation": "Ko7-thih Tâi7-tiong Tsām"
    };
    return sandhiMap[id] || "";
}

// ==========================================
// 13. UI 導覽頁籤與初始化
// ==========================================
function switchTab(tabId) {
    currentTab = tabId;
    
    document.querySelectorAll(".nav-tabs button").forEach(btn => btn.classList.remove("active"));
    const activeNavBtn = document.getElementById(`tab-${tabId}-btn`);
    if (activeNavBtn) activeNavBtn.classList.add("active");
    
    document.querySelectorAll("main section").forEach(section => section.classList.remove("active"));
    const activeSection = document.getElementById(`panel-${tabId}`);
    if (activeSection) activeSection.classList.add("active");
    
    if (tabId === "sandhi") {
        filterStationTable();
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    }
}

function toggleLanguage() {
    currentLang = currentLang === "zh" ? "en" : "zh";
    const text = document.getElementById("lang-toggle-text");
    if (text) text.textContent = currentLang === "zh" ? "Language: 台語" : "Language: English";
    
    updateUILabels();
    calculateTimeLabel();
    calculateJourney();
}

function updateUILabels() {
    const dict = uiStrings[currentLang];
    
    for (let id in dict) {
        const el = document.getElementById(id);
        if (el) {
            if (id === "uiTitle" || id === "uiSubtitle" || id === "mapTitle" || id === "vocabTitle" || id === "clockTitle" || id === "timeLearnTitle" || id === "quizTitle" || id === "stampsTitle" || id === "boothTitle" || id === "sandhiTableTitle" || id === "sandhiTrainerTitle") {
                el.innerHTML = dict[id];
            } else {
                el.textContent = dict[id];
            }
        }
    }
    
    const translations = {
        "ui-tab-adventure": dict.tabAdventure,
        "ui-tab-vocab": dict.tabVocab,
        "ui-tab-time": dict.tabTime,
        "ui-tab-sandhi": dict.tabSandhi,
        "ui-tab-quiz": dict.tabQuiz,
        "ui-tab-stamps": dict.tabStamps,
        
        "ui-booth-title": dict.boothTitle,
        "ui-label-from": dict.labelFrom,
        "ui-label-to": dict.labelTo,
        "ui-label-class": dict.labelClass,
        "ui-label-passengers": dict.labelPassengers,
        "ui-label-dep-time": dict.labelDepTime,
        
        "ui-info-direction": dict.infoDirection,
        "ui-info-duration": dict.infoDuration,
        "ui-info-cost": dict.infoCost,
        "ui-info-platform": dict.infoPlatform,
        "ui-btn-play-journey": dict.btnPlayJourney,
        "ui-map-title": dict.mapTitle,
        
        "ui-vocab-title": dict.vocabTitle,
        "ui-clock-title": dict.clockTitle,
        "ui-time-learn-title": dict.timeLearnTitle,
        "ui-label-adjust-time": dict.labelAdjustTime,
        "ui-label-preset-time": dict.labelPresetTime,
        "ui-btn-play-clock": dict.btnPlayClock,
        
        "ui-quiz-title": dict.quizTitle,
        "ui-quiz-welcome-title": dict.quizWelcomeTitle,
        "ui-quiz-welcome-desc": dict.quizWelcomeDesc,
        "ui-quiz-seller-name": dict.quizSellerName,
        "ui-quiz-time-name": dict.quizTimeName,
        "ui-btn-retry": dict.btnRetry,
        
        "ui-stamps-title": dict.stampsTitle,
        "ui-stamps-desc": dict.stampsDesc,
        "ui-sandhi-table-title": dict.sandhiTableTitle,
        "ui-sandhi-trainer-title": dict.sandhiTrainerTitle
    };
    
    for (let id in translations) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = translations[id];
    }
}

function calculateTimeLabel() {
    updateClockUI();
}

window.addEventListener("DOMContentLoaded", () => {
    populateStationSelectors();
    renderMRTMap();
    renderVocabWall();
    initClock();
    renderStampsAlbum();
    calculateJourney();
    
    const exportBtn = document.getElementById("btn-export-vocab");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            let fullVocabList = [...vocabData];
            stations.forEach(st => {
                fullVocabList.push({
                    zh: st.nameZH,
                    en: st.nameEN,
                    tw: st.poj,
                    type: "mrt-station",
                    audioId: st.audioId,
                    emoji: st.stamp
                });
            });
            
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullVocabList, null, 4));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "taichung_mrt_taigi_vocabulary.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    }
    
    if (localStorage.getItem("app_speech_rate")) {
        const storedRate = parseFloat(localStorage.getItem("app_speech_rate"));
        document.getElementById("speech-rate").value = storedRate;
        updateSpeechRate(storedRate);
        updateSpeechRateLabel(storedRate);
    }
    
    // Unlock Web Audio context on first user interaction
    window.addEventListener("pointerdown", () => {
        getAudioContext();
    }, { once: true });
    
    // Preload common audio in background for instant gapless playback
    preloadCommonAudio();
});
