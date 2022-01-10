import { addMistake } from "./utils";

export class WordList {
    text: string;
    status?: number;
    isActive?: boolean;

    constructor(text: string, status?: number, isActive?: boolean) {
        this.text = text;
        this.status = status;
        this.isActive = isActive || false;
    }
}

export enum WordStatus {
    void = 0,
    success = 1,
    error = 2
}

export class ErrorsDict {
    letter: string;
    errors: number = 0;
    wrongLetters: Mistake[] = [];

    constructor(letter: string, mistakenWith: string = "") {
        this.letter = letter;
        this.errors += 1;

        if (this.wrongLetters) {
            this.wrongLetters = [new Mistake(mistakenWith)];
        } else {
            addMistake(this.wrongLetters, mistakenWith);
        }
    }

    static getMostMistakes(error): ErrorsDict {
        const commonMistake = error.wrongLetters.reduce((prev, current) =>
            prev.error > current.error ? prev : current
        );
        const b: ErrorsDict = {
            letter: error.letter,
            errors: error.errors,
            wrongLetters: [commonMistake]
        };
        return b;
    }
}

export class Mistake {
    letter: string;
    error: number = 0;

    constructor(letter: string) {
        this.letter = letter;
        this.error += 1;
    }
}

// export const WORDS: string = "charges|database|expect|it's|market|efforts|sell|Corp|users|or|address|command|quality|described|should|investigation|you|main|Two|show|including|example|down|State|made|volume|additional|bond|distribution|field|American|department|Systems|money|war|works|law|position|Senate|office|spokesman|screen|find|buy|index|Reagan|bill|look|profits|It's|created|Court|part|team|increase|public|single|offers|member|police|comes|storage|printer|Europe|both|reports|named|interest|charge|Software|losses|standard|do|last|percent|forces|different|meet|course|purchase|method|We|earnings|per|cannot|until|user|company's|Some|limited|equipment|best|book|Robert|software|sources|All|about|management|deal|allows|became|research|S|plans|If|reported|drug|small|lines|together|first|To|one|lot|Manager|the|here|available|points|West|led|night|For|later|RAM|them|change|within|line|give|lost|than|Street|London|rule|million|approach|operation|paid|work|spending|industrial|given|allow|businesses|take|At|Wednesday|certain|August|point|large|built|being|planned|drive|effort|seems|seen|world|their|products|gas|recently|low|out|want|was|four|talks|Microsoft|needs|no|total|political|off|she|Many|came|due|Sunday|David|against|shows|issue|National|times|vendors|cost|such|seven|revenue|similar|up|currently|after|It|color|as|They|priced|March|life|long|model|former|into|continued|ability|costs|may|less|won|much|real|whose|even|behind|really|On|Inc|text|close|Air|The|I'm|light|rate|itself|is|died|troops|existing|capital|conference|enough|water|America|sent|air|had|Soviet|gain|they|policy|requirements|government|discussed|cars|will|processor|once|account|chairman|inflation|common|began|John|go|killed|International|released|could|states|going|under|plan|like|started|speed|though|hard|above|taken|debt|scheduled";
// export const WORDS: string =' פרס נובל הוא פרס המוענק מקרן שהוקמה על פי צוואתו של אלפרד נובל, כימאי ותעשיין שהמציא את הדינמיט. לא נהוג להעניק את הפרס לאישים לאחר מותם, גם אם תרומתם לאנושות הייתה רבה, אלא אם כן מועמדותם הוצגה לפני מותם. כך, בשנת 1931 הוענק פרס נובל לספרות למשורר השוודי אריק אקסל קרלפלט שנפטר כמה חודשים קודם לכן. קרלפלט עצמו היה חבר ועדת פרס נובל, ובמשך שנים רבות שימש כמזכיר האקדמיה השוודית, שקובעת את זהות מקבלי הפרס. למעשה כבר ב-1918 הוכרז קרלפלט כזוכה בפרס, אך הוא סירב לקבלו עקב ניגוד עניינים ומשום שסבר ששוודים רבים מדי כבר קיבלו את הפרס, והפרס לא חולק באותה שנה. גם מזכל האו"ם דאג המרשלד, חתן פרס נובל לשלום ב-1961, קיבל את הפרס לאחר שנהרג בהתרסקות מטוסו ברודזיה הצפונית. ב-1974 הוקשחו הנהלים ונקבע כי אדם צריך להיות חי בעת ההכרזה על הזוכים בחודש אוקטובר. ויליאם ויקרי, שקיבל את פרס נובל לכלכלה ב-1996, נפטר לאחר ההכרזה אך לפני הטקס. ראלף סטיינמן שזכה בפרס נובל לפיזיולוגיה או לרפואה ב-2011, מת שלושה ימים לפני פרסום ההודעה על זכייתו בפרס. חברי ועדת נובל לא ידעו על פטירתו בעת הפרסום';
export const WORDS =
  "7 World Trade Center (7 WTC) refers to two buildings that have existed at the same location within the World Trade Center site in Lower Manhattan, New York City. The original structure, part of the original World Trade Center, was completed in 1987 and was destroyed in the September 11 attacks in 2001. The current structure opened in May 2006. Both buildings were developed by Larry Silverstein, who holds a ground lease for the site from the Port Authority of New York and New Jersey. The original 7 World Trade Center was 47 stories tall, clad in red masonry, and occupied a trapezoidal footprint. An elevated walkway connected the building to the World Trade Center plaza. The building was situated above a Consolidated Edison power substation, which imposed unique structural design constraints. When the building opened in 1987, Silverstein had difficulties attracting tenants. Salomon Brothers signed a long-term lease in 1988 and became the main tenant of 7 WTC. On September 11, 2001, the structure was damaged by debris when the nearby North Tower of the World Trade Center collapsed. The debris also ignited fires, which continued to burn throughout the ";

export const DELEMITER = " ";
export const RTL = false;
export const SHUFFLE = false;
