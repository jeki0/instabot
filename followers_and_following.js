
//step1
arr = document.querySelectorAll('a[title]');
users = [];
for(i = 0; i < arr.length; i++) {
	users[i] = arr[i].innerText;
}

//step2
arr2 = document.querySelectorAll('a[title]');
users2 = [];
for(i = 0; i < arr2.length; i++) {
	users2[i] = arr2[i].innerText;
}


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

