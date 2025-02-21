import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import "../css/Home.css"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
function Home() {
    
    const [form, setform] = useState({ website: "", username: "", password: "", id: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const passwordRef = useRef(0)
    const usernameRef = useRef(0)
    const websiteRef = useRef(0)
    const showPassRef = useRef(0)
    // console.log(passwordArray);
    

    useEffect(() => {
        // console.log(passwordArray);
        let data = localStorage.getItem("passwords")
            if (data) {
                let arr = JSON.parse(data)
                setpasswordArray(arr)
                // alert("hi")
                // console.log("arr:",arr);
                
                

                

            }
        
    }, [])

    const savePassword = () => {
       
        // console.log()

        // setform({...form,})

        // console.log(passwordRef.current);
        // alert("Hello")
        if (form.username.length > 3 && form.password.length > 3 && form.website.length > 3) {
            toast.success('Password Saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setpasswordArray([...passwordArray, form])
            let data = localStorage.getItem("passwords")
            if (data) {
                let arr = JSON.parse(data)
                arr.push(form)
                // console.log("Local Storage:");
                // console.log("save arr:",arr);
                
                localStorage.setItem("passwords", JSON.stringify(arr))

            }
            else {
                
                localStorage.setItem("passwords", JSON.stringify([form]))
                // console.log("else");

                // console.log(localStorage.getItem("passwords"));

            }
            // console.log(form);

            setform({ website: "", username: "", password: "", id: "" })
            // console.log(passwordArray)
        }
        else {
            // alert("Error :Please Enter values greater than 3")
            toast.error('Error :Please Enter values greater than 3!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            setform({ website: "", username: "", password: "", id: "" })

        }






    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value, id: uuidv4() })
    }




    const showPassword = () => {
        // console.log(showPassRef.current.src);

        if (showPassRef.current.src.includes("/svg/showpass.svg")) {
            showPassRef.current.src = "./svg/hidepass.svg"
            passwordRef.current.type = "text"

        }
        else {
            showPassRef.current.src = "./svg/showpass.svg"
            passwordRef.current.type = "password"
        }

    }

    const editRecord = (items) => {
        // console.log(items);


        setpasswordArray([...passwordArray.filter((item) =>  item.id !== items.id )])
        setform(items)

    }

    const deleteRecord = (items) => {

        toast.success('Password Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        let val = confirm("Do you want to delete?")
        
       
     
        if (val) {
            let data = localStorage.getItem("passwords")
        let arr = JSON.parse(data)
       let deleteItem=arr.filter((item) =>  item.id != items )
    //    alert("handleDelete")
    //    console.log("Delete Item:",deleteItem);
    //    console.log(items);
       
       localStorage.setItem("passwords", JSON.stringify(deleteItem))
            let deleteItem2 = [...passwordArray.filter((item) =>  item.id !== items )]
            // console.log("Delete Item2:",deleteItem2);
            setpasswordArray(deleteItem2)
        }
    }

    const handleDeleteAll = ()=>{
        // alert("handleDeleteAll")
        localStorage.removeItem("passwords")
        let arr = []
        setpasswordArray([])
    }

    const copyData = (data)=>{
        navigator.clipboard.writeText(data)
    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

            </div>
            <div className='container mx-auto py-10 flex flex-col sm:items-center justify-center gap-8 sm:px-4 px-1'>

                <div className='flex items-center justify-center bg-[#f0f8ff]  rounded-lg w-fit py-1 px-4 mx-auto'>
                    <lord-icon
                        src="https://cdn.lordicon.com/fgxwhgfp.json"
                        trigger="hover"
                        stroke="light"
                        colors="primary:#121331,secondary:#30e8bd"
                        style={{ "width": "30px", "height": "30px" }}>
                    </lord-icon>
                    <span className='font-light'>PasswordManger</span>
                </div>
                {/* <form className="min-w-full mx-auto flex items-center justify-center flex-col px-4"> */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={form.website} ref={websiteRef} onChange={(e) => handleChange(e)} name="website" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="username" value={form.username} onChange={(e) => handleChange(e)} ref={usernameRef} name="username" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
                <div className="relative z-0 w-full mb-5 group  ">
                    <input type="password" value={form.password} onChange={(e) => handleChange(e)} ref={passwordRef} name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>

                    <img className='absolute right-0 top-3 cursor-pointer' ref={showPassRef} src='./svg/showpass.svg' onClick={() => showPassword()} />
                </div>


                <button onClick={savePassword} className="text-white  cursor-pointer flex items-center gap-1 justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    <lord-icon
                        src="https://cdn.lordicon.com/tsrgicte.json"
                        trigger="hover"
                        stroke="light"
                        colors="primary:#121331,secondary:#000000"
                        style={{ "width": "30px", "height": "30px" }}>
                    </lord-icon>
                    Save </button>



                {/* </form> */}

                <div className={passwordArray.length !=0 ? "show_passwords flex flex-col min-w-full" : "invisible"}>
                    <div className=' flex  items-start justify-items-start  py-2'>
                        <h1 className='font-semibold text-[#72727]'>Saved Passwords:</h1>
                    </div>

                    <div className='passwords_list flex mx-auto   justify-around  w-[95%]  flex-col gap-0 border-2 sm:px-2 py-4  rounded-2xl bg-green-400 text-[white] border-[white] '>
                        <div className='font-bold heading flex items-center justify-between min-w-full  border-b-1 px-2 pt-2 '>
                            <div className='sm:min-w-[25%]  min-w-[25%]  border-r-1 text-center'>
                                <lord-icon

                                    src="https://cdn.lordicon.com/rpviwvwn.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                >
                                </lord-icon>
                            </div>
                            <div className='sm:min-w-[25%] min-w-[25%]   border-r-1 text-center'>
                                <lord-icon
                                    class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                    src="https://cdn.lordicon.com/kdduutaw.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                >
                                </lord-icon>
                            </div>
                            <div className='sm:min-w-[25%]  min-w-[25%]  border-r-1 text-center'>
                                <lord-icon
                                    class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                    src="https://cdn.lordicon.com/fgxwhgfp.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                >
                                </lord-icon>
                            </div>
                            <div className='sm:min-w-[25%]  min-w-[25%]   text-center flex items-center  gap-1 justify-center' >
                                <span >
                                    <lord-icon
                                        class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                        src="https://cdn.lordicon.com/fikcyfpp.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#ffffff,secondary:#ffffff"

                                    >
                                    </lord-icon>
                                </span>

                                <span >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]">
                                    </lord-icon>
                                </span>
                            </div>

                        </div>

                      {passwordArray.map((item) => {
                            return <div key={item.id} className='rows flex items-center justify-between min-w-full  px-2 py-2'>
                                <div className='flex h-[40px] sm:min-w-[25%] min-w-[25%]  border-r-1 border-b-1 px-2 py-1 overflow-x-auto relative  text-[12px]'>
                                    <img onClick={()=>{copyData(item.website)}}  className='absolute right-0 invert cursor-pointer sm:w-[25px] w-[20px] sm:h-[25px] h-[20px]' src='./svg/copy.svg' />
                                    <p  className='overflow-x-auto pr-7 text-[12px] '>{item.website} </p>

                                </div>
                                <div className='flex h-[40px] sm:min-w-[25%] min-w-[25%]  border-r-1 border-b-1 px-2 py-1 overflow-x-auto  text-[12px] relative'>
                                <img  onClick={()=>{copyData(item.username)}} className='absolute right-0 invert cursor-pointer sm:w-[25px] w-[20px] sm:h-[25px] h-[20px]' src='./svg/copy.svg' />
                                    <p  className='overflow-x-auto pr-7 text-[12px] '>{item.username} </p>
                                </div>
                                <div className='flex h-[40px] sm:min-w-[25%] min-w-[25%]  border-r-1 border-b-1 px-2 py-1 overflow-x-auto  text-[12px] relative'>
                                <img  onClick={()=>{copyData(item.password)}} className='absolute right-0 invert cursor-pointer sm:w-[25px] w-[20px] sm:h-[25px] h-[20px]' src='./svg/copy.svg' />
                                    <p className='overflow-x-auto pr-7 text-[12px]  '> {item.password} </p>
                                </div>
                                <div className='flex h-[40px] sm:min-w-[25%] min-w-[25%]  border-b-1 px-2 py-1 overflow-x-auto  items-center justify-center gap-1 '>

                                    <span onClick={() => { editRecord(item) }} className='cursor-pointer'>
                                        <lord-icon class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                            src="https://cdn.lordicon.com/fikcyfpp.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#ffffff,secondary:#ffffff"

                                        >
                                        </lord-icon>
                                    </span>

                                    <span onClick={() => { deleteRecord(item.id) }} className='cursor-pointer'>
                                        <lord-icon class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
                                            src="https://cdn.lordicon.com/hwjcdycb.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#ffffff,secondary:#ffffff"
                                        >
                                        </lord-icon>
                                    </span>

                                </div>
                            </div>
                        })}
                       

                    </div>


                </div>

                        
                <button onClick={handleDeleteAll} className={passwordArray.length>0?"text-white  cursor-pointer flex items-center gap-1 justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"hidden"}>

                <lord-icon
    src="https://cdn.lordicon.com/hwjcdycb.json"
    trigger="hover"
    colors="primary:#121331,secondary:#000000"
    class="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]">
</lord-icon>
 </button>
            </div>

           
        </>
    )
}

export default Home
