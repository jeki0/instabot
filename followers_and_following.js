users = ["abhay_bhise_", "aryel.lopess", "khmyly.khmyl", "javadzabihiy", "japanese_trend_news", "tenritatta17", "bilalbitioui", "espadistros", "watch.land.ir", "mr.saleh8", "_mahdi_dh_1", "criminal_tunes_radioo", "mohamapteymori82", "arby_mo", "liposhiraz", "saryarqa_avtomoika", "twilio", "carlo_fortra", "mahanserver", "ghodsi.kalbasi", "zulpukarovdaniar00777", "stry.ydh", "ycchbvubce", "shiraztic.ir", "genius_till_date_", "2020shiraz", "topicmarketsacademy", "demetreskanapitsas", "zulpukarov07779", "shoes.k_z", "arashanisii", "marmargasht", "355nsr", "basilespaparounas", "daviddavisfit", "gl_pro", "piar_shop_1", "marcello.sadeoliveira", "tashrifat.tavalod.shiraz", "behzadkaffashan", "ru.stam4239", "__cruel_boy", "ninja_gnf", "debug_laught", "_ali_k_2485", "detailedsolutions_yeg", "redkiwi_nl", "mattia.dichiara", "smartstudshop", "rayantamin", "gmink777", "zarya_shoes", "rasoulshah", "corfuweb", "monkey_one", "anxzool", "code.life.17", "marvelnufcheros", "amiryami.ir", "pure.python", "geekonics", "12_ace"];

users2 = ["abhay_bhise_", "aryel.lopess", "cyclone_eye", "khmyly.khmyl", "javadzabihiy", "japanese_trend_news", "tenritatta17", "bilalbitioui", "espadistros", "mr.saleh8", "watch.land.ir", "_mahdi_dh_1", "criminal_tunes_radioo", "liposhiraz", "arby_mo", "mohamapteymori82", "saryarqa_avtomoika", "carlo_fortra", "twilio", "ghodsi.kalbasi", "mahanserver", "zulpukarovdaniar00777", "genius_till_date_", "ycchbvubce", "shiraztic.ir", "2020shiraz", "topicmarketsacademy", "beytalhadaya", "demetreskanapitsas", "zulpukarov07779", "redkiwi_nl", "shoes.k_z", "gl_pro", "355nsr", "piar_shop_1", "basilespaparounas", "marmargasht", "marcello.sadeoliveira", "daviddavisfit", "arashanisii", "tashrifat.tavalod.shiraz", "ninja_gnf", "behzadkaffashan", "detailedsolutions_yeg", "ru.stam4239", "__cruel_boy", "debug_laught", "_ali_k_2485", "mattia.dichiara", "smartstudshop", "gmink777", "rayantamin", "zarya_shoes", "rasoulshah", "corfuweb", "monkey_one", "anxzool", "code.life.17", "marvelnufcheros", "amiryami.ir", "pure.python", "geekonics", "12_ace"];
//step1
//arr = document.querySelectorAll('a[title]');
//users = [];
//for(i = 0; i < arr.length; i++) {
//	users[i] = arr[i].innerText;
//}

//step2
//arr2 = document.querySelectorAll('a[title]');
//users2 = [];
//for(i = 0; i < arr2.length; i++) {
//	users2[i] = arr2[i].innerText;
//}


//step3
for(i = 0; i < users2.length; i++) {
    title = 0;
    
	for(x = 0; x < users.length; x++) {
		if(users[x] == users2[i]) {
			title = 1;
		}
	}
    
    if(!title) {
        console.log(users2[i]);
    }
}

    console.log(i);
    console.log(x);

