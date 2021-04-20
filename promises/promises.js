//// //

// XHR Request BASIC

    // let xhr = new XMLHttpRequest();                         
    // xhr.open('GET','data.json', false);
    // xhr.send();
    // console.log(xhr);
    // console.log(xhr.responseText);
    // console.log(JSON.parse(xhr.responseText))

// ////

//GETDATA Function

// function getData(fileName){
//     let request = new Promise(function(resolve, reject){
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET',fileName, true);
//         xhr.send();

//         xhr.addEventListener('readystatechange', function() {
//             if (xhr.readyState === 4 && xhr.status>=200 && xhr.status<400){
//                 resolve(JSON.parse(xhr.responseText));
//             }else if (xhr.readyState === 4 && xhr.status>=400){
//                 reject(xhr.statusText)
//             }

//         })

/////////////////
// Without fetch and promise all

function getData(fileName){
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',fileName, true);
        xhr.send();

        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === 4 && xhr.status>=200 && xhr.status<400){
                resolve(JSON.parse(xhr.responseText));
            }else if (xhr.readyState === 4 && xhr.status>=400){
                reject(xhr.statusText)
            }

        })

    })
}
    let userA = getData('data.json');
    let children = [];

    userA
	.then(
		userA => {
			children.push(userA);
            return getData('data2.json');
		},
	)
	.then(
		userB => {
			children.push(userB);
			return children; 
		}
	)
	.then(
		children => {
			let userChildren = children.map(user=>user.children);
			console.log (userChildren.flat());
		}
	)
    .catch(
        data => console.log('smth went wrong')
    )
   

//////// With fetch and promise All


let user1 = fetch('data.json');
let user2 = getData('data2.json');

Promise
	.all([user1, user2])
	.then(
		(users) => {
            let kids = []
            users.forEach(user => {
                kids = kids.concat(user.children)
            });
			console.log(kids)
		}
	)
	.catch(
		data => console.log('smth went wrong')
	)



  