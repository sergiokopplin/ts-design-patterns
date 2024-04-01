// Observer (Behavioral)
// Many objects subscribe to events that are broadcast from another object.
// one-to-many relationship.
// Loop that unfolds over the dimension of time.

import { Subject } from "rxjs";

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + "via Den Tv"));
const tv2 = news.subscribe((v) => console.log(v + "via Batcave Tv"));
const tv3 = news.subscribe((v) => console.log(v + "via Airport Tv"));

news.next("Breaking news: ");
news.next("The war is over ");
