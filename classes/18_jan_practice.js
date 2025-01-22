// WAf TO update profile
// take image url/path from user and user name, mob , address,bio
// and display the profile in center of user screen in card form

let user_name=prompt("Enter Your Name")
let user_mob=parseFloat(prompt("Enter Your Mobile Number"))
let user_address=prompt("Enter Your Address")
let user_bio=prompt("Enter Your Bio")
let user_image=prompt("Give your Image Path")

function create_profile(user_name,user_mob,user_address,user_bio,user_image){
    document.write(`
     <div style="width: auto; height: auto; margin:auto; border: 1px solid black;">
        <img src="${user_image}" alt="missing">
        <div>
            <span>Name: ${user_name || 'Not Available'}</span><br/>
            <span>contact: ${user_mob || 'Not Available'}</span><br/>
            <span>Address: ${user_address || 'Not Available'}</span><br/>
            <span>Bio: ${user_bio || 'Not Available'}</span><br/>
            <button>follow</button>
            <button>Edit</button>
        </div>
    </div>
    `)
}
create_profile(user_name,user_mob,user_address,user_bio,user_image)