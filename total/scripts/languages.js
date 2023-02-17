var languages_data = [
    {
        cl_1: "Reversi Rules:",
        cl_2: "The board starts empty. Each turn, the player places one piece on the board with their colour facing up.For the first four moves, the players must play to one of the four squares in the middle of the board and no pieces are captured or reversed. Each piece played must be laid adjacent to an opponent's piece so that the opponent's piece or a row of opponent's pieces is flanked by the new piece and another piece of the player's colour. All of the opponent's pieces between these two pieces are 'captured' and turned over to match the player's colour. It can happen that a piece is played so that pieces or rows of pieces in more than one direction are trapped between the new piece played and other pieces of the same colour. In this case, all the pieces in all viable directions are turned over. The game is over when neither player has a legal move (i.e. a move that captures at least one opposing piece) or when the board is full. In Reversi if one player cannot not play a piece, the game finishes.",
        cl_3: "start",
        cl_4: "playing field:",
        cl_5: "color of player:",
        cl_6: "play with:",
        cl_7: "computer",
        cl_8: "friend",
        cl_9: "difficulty:",
        cl_10: "easy",
        cl_11: "medium",
        cl_12: "hard",
        cl_13: "Winner",
        cl_14: "player:",
        cl_15: "score:",
        cl_16: "Play Again",
        cl_17: "New Game",
        cl_18: "TURN:",
        cl_19: "SCORE:",
        cl_20: "Draw",
        cl_21: "computer:",
        cl_22: "easy mode",
        cl_23: "medium mode",
        cl_24: "hard mode",
        cl_25: "start with:",
        cl_26: "player"
    },
    {
        cl_1: "قوانین ریورسی:",
        cl_2: "زمین بازی خالی شروع می شود. در هر نوبت، بازیکن یک مهره را با رنگی خودش روی تخته قرار می‌دهد. برای چهار حرکت اول، بازیکنان باید در یکی از چهار مربع در وسط تخته بازی کنند و هیچ مهره‌ای گرفته نمی‌شود یا برعکس نمی‌شود. هر مهره ای که بازی می شود باید در مجاورت مهره حریف قرار گیرد به طوری که مهره حریف یا ردیفی از مهره های حریف توسط مهره جدید و یک قطعه دیگر از رنگ بازیکن کنار هم قرار گیرد. تمام مهره های حریف بین این دو مهره، گرفته می شوند و برگردانده می شوند تا با رنگ بازیکن مطابقت داشته باشد، سیاه همیشه اول بازی می کند. ممکن است یک قطعه به گونه ای گذاشته شود که مهره ها یا ردیف هایی از مهره ها در بیش از یک جهت بین قطعه جدید گذاشته شده و سایر قطعات هم رنگ گیر کند. در این حالت، تمام قطعات در تمام جهات قابل دسترس برگردانده می شوند. بازی زمانی تمام می شود که هیچ یک از بازیکنان حرکت قانونی نداشته باشند (یعنی حرکتی که حداقل یک مهره مقابل را بگیرد) یا زمانی که تخته پر باشد. در ریورسی اگر یک بازیکن نتواند یک دور را بازی کند، بازی تمام می شود.",
        cl_3: "شروع",
        cl_4: "زمین بازی:",
        cl_5: "رنگ بازیکن:",
        cl_6: "بازی با:",
        cl_7: "کامپیوتر",
        cl_8: "دوست",
        cl_9: "سختی:",
        cl_10: "آسان",
        cl_11: "متوسط",
        cl_12: "سخت",
        cl_13: "برنده",
        cl_14: "بازیکن:",
        cl_15: "امتیاز:",
        cl_16: "بازی مجدد",
        cl_17: "بازی جدید",
        cl_18: "نوبت:",
        cl_19: "امتیاز:",
        cl_20: "مساوی",
        cl_21: "کامپیوتر:",
        cl_22: "مود آسان",
        cl_23: "مود متوسط",
        cl_24: "مود سخت",
        cl_25: "شروع با:",
        cl_26: "بازیکن"
    }
];

// change game language
function change_languages() {
    if (languages) {
        document.getElementById("languages_button").innerHTML = "Fa";
        document.getElementById("reversi").className = "";
        languages = 0;
    }
    else {
        document.getElementById("languages_button").innerHTML = "En";
        document.getElementById("reversi").className = "reversi_l_1";
        languages = 1;
    }
    document.getElementsByClassName("cl_1")[0].innerHTML = languages_data[languages].cl_1;
    document.getElementsByClassName("cl_2")[0].innerHTML = languages_data[languages].cl_2;
    document.getElementById("save_setting").innerHTML = languages_data[languages].cl_3;
    document.getElementsByClassName("cl_4")[0].innerHTML = languages_data[languages].cl_4;
    document.getElementsByClassName("cl_5")[0].innerHTML = languages_data[languages].cl_5;
    document.getElementsByClassName("cl_6")[0].innerHTML = languages_data[languages].cl_6;
    document.getElementsByClassName("cl_7")[0].innerHTML = languages_data[languages].cl_7;
    document.getElementsByClassName("cl_8")[0].innerHTML = languages_data[languages].cl_8;
    document.getElementsByClassName("cl_9")[0].innerHTML = languages_data[languages].cl_9;
    document.getElementsByClassName("cl_10")[0].innerHTML = languages_data[languages].cl_10;
    document.getElementsByClassName("cl_11")[0].innerHTML = languages_data[languages].cl_11;
    document.getElementsByClassName("cl_12")[0].innerHTML = languages_data[languages].cl_12;
    document.getElementsByClassName("box_name")[0].innerHTML = languages_data[languages].cl_13;
    document.getElementsByClassName("box_name")[1].innerHTML = languages_data[languages].cl_13;
    document.getElementsByClassName("who_play")[0].innerHTML = languages_data[languages].cl_14;
    document.getElementsByClassName("who_play")[1].innerHTML = languages_data[languages].cl_14;
    document.getElementsByClassName("cl_15")[0].innerHTML = languages_data[languages].cl_15;
    document.getElementsByClassName("cl_15")[1].innerHTML = languages_data[languages].cl_15;
    document.getElementsByClassName("game_reload")[0].innerHTML = languages_data[languages].cl_16;
    document.getElementsByClassName("game_reload")[1].innerHTML = languages_data[languages].cl_17;
    document.getElementsByClassName("cl_18")[0].innerHTML = languages_data[languages].cl_18;
    document.getElementsByClassName("cl_19")[0].innerHTML = languages_data[languages].cl_19;
    document.getElementsByClassName("cl_81")[0].innerHTML = languages_data[languages].cl_25;
    document.getElementsByClassName("cl_82")[0].innerHTML = languages_data[languages].cl_26;
    document.getElementsByClassName("cl_83")[0].innerHTML = languages_data[languages].cl_7;
}

