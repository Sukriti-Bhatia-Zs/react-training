import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Formdetails=()=>{

    const [formdetails,setformdetails]=useState({
        name:"",
        email:"",
        greeting:""
    });

    const handlesubmit=(e)=>{
        // e.preventDefault();
        console.log(formdetails);
        localStorage.setItem("formdetails", JSON.stringify({ name: formdetails.name, email: formdetails.email }));
        sessionStorage.setItem("greetingmessage",formdetails.greeting);
    }

    const [formcontent,setformcontent]=useState({
        name:"",
        email:"",
       
    })

    const [greetingmsg,setgreetingmsg]=useState("");

    useEffect(()=>{
        const formdata=localStorage.getItem("formdetails")
        if(formdata){
            setformcontent( JSON.parse(formdata))
        }

        const greeting=sessionStorage.getItem("greetingmessage");
        if(greeting){
            setgreetingmsg(greeting);
        }

        //  console.log(JSON.parse(document.cookie));
        console.log(Cookies.get("theme"));
        const usertheme=Cookies.get("theme");
        settingtheme(usertheme)
       
       
    },[])

    const settingtheme=(usertheme)=>{
        if(usertheme==="dark"){
            document.body.style.backgroundColor="black";
        }
        else{
            document.body.style.backgroundColor="white";
        }
    }

    const [showform,setshowform]=useState(false);

    const [theme,settheme]=useState({
        themes:"",
    });

    const createtheme=()=>{
        Cookies.set("theme",theme.themes,{expires:7})

    }

    const toggleform=(e)=>{
        e.preventDefault();
        setshowform(prev=>!prev);
    }


    return (

        <div className="form">
            <form  onSubmit={handlesubmit}>
                <div className="formgroup">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" 
                    onChange={(e)=>{setformdetails(prev=>({...prev,name:e.target.value}))}}
                    value={formdetails.name}
                    />
                </div>
                <div className="formgroup">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" 
                    onChange={(e)=>{setformdetails(prev=>({...prev,email:e.target.value}))}}
                    value={formdetails.email} />
                </div>
                <div className="formgroup">
                    <label htmlFor="Greeting">Greeting Message : </label>
                    <input type="text" name="Greeting" 
                    onChange={(e)=>{setformdetails(prev=>({...prev,greeting:e.target.value}))}}
                     />
                </div>

                <div className="formgroup">
                    <button type="submit" className="submitbtn">Submit</button>
                </div>
                <div>
                <button id="showBtn" className="submitbtn" onClick={toggleform}>{showform ? "Hide Form" : "Show Form" }</button>
            </div>
            </form>


            {showform && (
                <div id="form">
                    <form >
                        <label for="name">Theme:</label>
                        <input type="text" id="name" name="name" required placeholder="enter theme" 
                         onChange={(e)=>{settheme(prev=>({...prev,themes:e.target.value}))}}/>
                        <br></br>

                        <button type="submit" onClick={createtheme}>Submit Theme</button>
                    </form>
                </div>
            ) }


            {formcontent.name || formcontent.email? (
                
                <div style={{
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    flexDirection: "column", 
                    gap: "1.5rem", 
                    backgroundColor: "#f4f4f9", 
                    padding: "2rem", 
                    borderRadius: "10px", 
                    marginTop: "2rem", 
                    width: "80%", 
                    marginLeft: "auto", 
                    marginRight: "auto"
                  
                }}>
                    <div style={{
                        width: "80%", 
                        padding: "1rem", 
                        backgroundColor: "#333", 
                        color: "white", 
                        borderRadius: "8px", 
                        fontSize: "18px", 
                        fontWeight: "bold", 
                        textAlign: "center"
                    }}>
                        Name : {formcontent.name}
                    </div>
                    <div style={{
                        width: "80%", 
                        padding: "1rem", 
                        backgroundColor: "#333", 
                        color: "white", 
                        borderRadius: "8px", 
                        fontSize: "18px", 
                        fontWeight: "bold", 
                        textAlign: "center"
                    }}>
                        Email :{formcontent.email}
                    </div>
                </div>
            ):(
                <div style={{display:"none"}}>
                </div>
            )}

            {/* greeting */}
            {greetingmsg && (
                <div
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                  fontSize: "20px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                }}
              >
                {greetingmsg}
              </div>
            )}
    </div>
    )
}

export default Formdetails