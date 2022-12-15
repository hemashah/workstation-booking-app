import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import { Outlet, Link } from "react-router-dom";
import axios from './api/axios';
import { useHistory } from "react-router-dom";


const LOGIN_URL = '/auth';

const Machine = (props) => {
    let  listStationData =[]
    const [workstat, setWorkstat] = useState([]);
    const [artists, setArtists] = useState([]);
    const [workcount, setWorkcount] = useState(0);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);


    const errRef = useRef();
   
    const [errMsg, setErrMsg] = useState('');


    // const { setAuth } = useContext(AuthContext);
    // const userRef = useRef();
    // const errRef = useRef();
    // let name;
    const LoggedUser = localStorage.getItem('username')
    let slotBookedCount =0;
    // const LoggedUser = localStorage.getItem('userslots')
    // if(localStorage.getItem('userslots')){
    //     slotBookedCount = 0;
    //     // let bookedSlots = localStorage.getItem('userslots')

    //     // if(localStorage.getItem('userslots')){
    //         let  slots= JSON.parse(localStorage.getItem("userslots"))
    //         let bookedSlotArr =[]
    //         slots.forEach(slotData => {
    //             if(slotData.username == LoggedUser){
    //                 slotBookedCount++
    //                 bookedSlotArr.push(slotData)
    //             }
    //         }
    
    //             )
    //          if(slotBookedCount>0){
    //             setWorkstat([]);
    //             setWorkstat(current =>
    //                 [...bookedSlotArr]);         

    //             }
                
    //          }
  

    
    //  const myWorkArrayData =[
    //         {
    //             id:1,
    //             name:'1',
    //             slot:'09:00',
    //             active:false
    //         },
    //         {
    //             id:2,
    //             name:'2',
    //             slot:'09:30',
    //             active:false
    //         },
    //         {
    //             id:3,
    //             name:'3',
    //             slot:'10:00',
    //             active:false
    //         },
    //         {
    //             id:4,
    //             name:'4',
    //             slot:'10:30',
    //             active:false
    //         },
    //         {
    //             id:5,
    //             name:'5',
    //             slot:'11:00',
    //             active:false
    //         },
    //         {
    //             id:6,
    //             name:'6',
    //             slot:'11:30',
    //             active:false
    //         },
    //         {
    //             id:7,
    //             name:'7',
    //             slot:'12:00',
    //             active:false
    //         },
    //         {
    //             id:8,
    //             name:'8',
    //             slot:'12:30',
    //             active:false
    //         },
    //         {
    //             id:9,
    //             name:'9',
    //             slot:'01:00',
    //             active:false
    //         },
    //         {
    //             id:10,
    //             name:'10',
    //             slot:'01:30',
    //             active:false
    //         },
    //         {
    //             id:11,
    //             name:'11',
    //             slot:'02:00',
    //             active:false
    //         }
    //     ]


    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit =  (e) => {
    //     e.preventDefault();
    //      console.log( JSON.stringify({ user, pwd }))
    //      console.log( user)
    //      console.log( pwd)
    //      debugger
    //      let users =[]
    //      let count = 0
    //      if(localStorage.getItem("userData")){
    //        users= JSON.parse(localStorage.getItem("userData"))
    //        users.forEach(element => {
    //         if(element.username == user && element.password == pwd){
    //           count =1
    //           name = user
    //          }          
    //          });
    //        if(count == 1){
    //         setAuth({ user, pwd });
    //         setUser('');
    //         setPwd('');
    //         setSuccess(true);
    //        }
    //        else{
    //         console.log( "error")
          
    //         // setSuccess(false);
    //         setErrMsg('Machine Failed');
    //         errRef.current.focus();
    //         //   setUser('');
    //         // setPwd('');
    //      }
    //      }
    //      else{
    //         console.log( "error")
    //         setUser('');
    //         setPwd('');
    //         setSuccess(false);
    //         setErrMsg('Machine Failed');
    //         errRef.current.focus();
    //      }
       
        // try {
        //     const response = await axios.post(Machine_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Machine Failed');
        //     }
        //     errRef.current.focus();
        // }
        // const history = useHistory()
        // const navigateTo = () => history.push('/register');//eg.history.push('/Machine');
      
    // }
    let workstationName = ''
    const workflowClick = (slot) => {  //slot click
//slot booked
if(localStorage.getItem('userslots')){
    slotBookedCount = 0;
    // let bookedSlots = localStorage.getItem('userslots')

    // if(localStorage.getItem('userslots')){
        let  slots= JSON.parse(localStorage.getItem("userslots"))
        let bookedSlotArr =[]
        slots.forEach(slotData => {
            if(slotData.username == LoggedUser){
                slotBookedCount++
                bookedSlotArr.push(slotData)
            }
        }

            )
            if(slotBookedCount==3){
                setErrMsg('Only 3 workstation allocation allowed')
                return
            }
         if(slotBookedCount>0){
            setWorkstat([]);
            setWorkstat(current =>
                [...bookedSlotArr]);  
                
            //     setWorkcount(0);
            // setWorkstat(slotBookedCount);  

            }
            
         }


//end










      let  workstation =localStorage.getItem("station")

     console.log(slot,workstation)

     let username = localStorage.getItem("username")
     console.log( username)
     let obj = {
        username:username,
        slot:slot,
        workstation:workstation
     }
    let slotList =[];
     let countUserSlot = 0
     if(localStorage.getItem('userslots')){
        let  slots= JSON.parse(localStorage.getItem("userslots"))

        slots.forEach(slotData => {
            if(slotData.username == username && slotData.workstation == workstation && slotData.slot == slot){
                countUserSlot++
            }
        }

            )
         if(countUserSlot==0){
            slots.push(obj)
            localStorage.setItem("userslots", JSON.stringify(slots))
            
         }
        // slotList = localStorage.getItem('userslots');
        
     }
     else{
        slotList.push(obj)
        localStorage.setItem("userslots", JSON.stringify(slotList))
     }


     let listStationData = null;
     let indexToEdit;
     let   WorkStationList= JSON.parse(localStorage.getItem("userWorkstation"))
            WorkStationList.forEach((element,ind) => {
               if(element.username == username && element.wName == workstation){
                indexToEdit = ind;
                let isVerify = false;
                listStationData = element.wStation
                listStationData.forEach((wData,index) => {
                    if(wData.slot == slot){
                        // wData.active = true
                        wData.active = !wData.active
                        isVerify = wData.active
                    }
                })

                // if(slotBookedCount==3 && isVerify == true){
                //     // setErrMsg('Only 3 workstation allocation allowed')
                //     return
                // }
                 let   objSlot = {username:username,wName:workstation,wStation:listStationData}

                WorkStationList.splice(indexToEdit,1,objSlot)
                // WorkStationList[indexToEdit] = objSlot
                    // WorkStationList.unshift({username:username,wName:workstation,wStation:listStationData})
                    localStorage.setItem("userWorkstation", JSON.stringify(WorkStationList))
                    
                    
                    if(isVerify == false){
                    // localStorage.setItem("userWorkstation", JSON.stringify(WorkStationList))

                    let  slots= JSON.parse(localStorage.getItem("userslots"))
                    let indSlot;
                    slots.forEach((slotData,i) => {
                        if(slotData.username == username && slotData.workstation == workstation && slotData.slot == slot){
                            indSlot = i;
                        }
                    }

                        )
                        slots.splice(indSlot,1)

                    // if(countUserSlot==0){
                    //     slots.push(obj)
                        localStorage.setItem("userslots", JSON.stringify(slots))
                        
                    // }
                }
               setArtists([]);
                setArtists(current =>
                    [...listStationData]);         

                }
    }  )



    
//slot booked
if(localStorage.getItem('userslots')){
    slotBookedCount = 0;
    // let bookedSlots = localStorage.getItem('userslots')
    setWorkstat([]);

    // if(localStorage.getItem('userslots')){
        let  slots= JSON.parse(localStorage.getItem("userslots"))
        let bookedSlotArr =[]
        slots.forEach(slotData => {
            if(slotData.username == LoggedUser){
                slotBookedCount++
                bookedSlotArr.push(slotData)
            }
        }

            )
         if(slotBookedCount>0){
            setWorkstat([]);
            setWorkstat(current =>
                [...bookedSlotArr]);  
                
            //     setWorkcount(0);
            // setWorkstat(slotBookedCount);  

            }
            
         }
         else{
            setWorkstat([]);
            setWorkstat(current =>
                []); 
         }


//end

}

    const handleClick = (workstation) => { //workflow click
        // setActive1(!active1);
        // setActive2(!active2);
        // setActive3(!active3);

        if(workstation == 'M1'){
            setActive1(true);
            setActive2(false);
            setActive3(false);

        }
        else  if(workstation == 'M2'){
            setActive2(true);
            setActive1(false);
        setActive3(false);

        } else  if(workstation == 'M3'){
            setActive3(true);
            setActive1(false);
            setActive2(false);

        }


        const myWorkArray = {
            M1:[
            {
                id:1,
                name:'1',
                slot:'09:00',
                active:false
            },
            {
                id:2,
                name:'2',
                slot:'09:30',
                active:false
            },
            {
                id:3,
                name:'3',
                slot:'10:00',
                active:false
            },
            {
                id:4,
                name:'4',
                slot:'10:30',
                active:false
            },
            {
                id:5,
                name:'5',
                slot:'11:00',
                active:false
            },
            {
                id:6,
                name:'6',
                slot:'11:30',
                active:false
            },
            {
                id:7,
                name:'7',
                slot:'12:00',
                active:false
            },
            {
                id:8,
                name:'8',
                slot:'12:30',
                active:false
            },
            {
                id:9,
                name:'9',
                slot:'01:00',
                active:false
            },
            {
                id:10,
                name:'10',
                slot:'01:30',
                active:false
            },
            {
                id:11,
                name:'11',
                slot:'02:00',
                active:false
            }
        ],
        M2:[
            {
                id:12,
                name:'12',
                slot:'09:00',
                active:false
            },
            {
                id:13,
                name:'13',
                slot:'09:30',
                active:false
            },
            {
                id:3,
                name:'3',
                slot:'10:00',
                active:false
            },
            {
                id:4,
                name:'4',
                slot:'10:30',
                active:false
            },
            {
                id:5,
                name:'5',
                slot:'11:00',
                active:false
            },
            {
                id:6,
                name:'6',
                slot:'11:30',
                active:false
            },
            {
                id:7,
                name:'7',
                slot:'12:00',
                active:false
            },
            {
                id:8,
                name:'8',
                slot:'12:30',
                active:false
            },
            {
                id:9,
                name:'9',
                slot:'01:00',
                active:false
            },
            {
                id:10,
                name:'10',
                slot:'01:30',
                active:false
            },
            {
                id:11,
                name:'11',
                slot:'02:00',
                active:false
            }
        ],
        M3:[
            {
                id:12,
                name:'12',
                slot:'09:00',
                active:false
            },
            {
                id:13,
                name:'13',
                slot:'09:30',
                active:false
            },
            {
                id:3,
                name:'3',
                slot:'10:00',
                active:false
            },
            {
                id:4,
                name:'4',
                slot:'10:30',
                active:false
            },
            {
                id:5,
                name:'5',
                slot:'11:00',
                active:false
            },
            {
                id:6,
                name:'6',
                slot:'11:30',
                active:false
            },
            {
                id:7,
                name:'7',
                slot:'12:00',
                active:false
            },
            {
                id:8,
                name:'8',
                slot:'12:30',
                active:false
            },
            {
                id:9,
                name:'9',
                slot:'01:00',
                active:false
            },
            {
                id:10,
                name:'10',
                slot:'01:30',
                active:false
            },
            {
                id:11,
                name:'11',
                slot:'02:00',
                active:false
            }
        ]
        }; 
        // setActive(!active);

        // e.preventDefault();
        // console.log( JSON.stringify({ user, pwd }))
        // console.log( user)
        // console.log( pwd)
        // debugger
        let usersWorkStat =[]
        let count = 0;
       listStationData = myWorkArray[workstation];
       localStorage.setItem("station",workstation)

        let username = localStorage.getItem("username")
                console.log( username)
        if(localStorage.getItem("userWorkstation")){
          let   WorkStationList= JSON.parse(localStorage.getItem("userWorkstation"))
            WorkStationList.forEach(element => {
               if(element.username == username && element.wName == workstation){
                 count =1
                 listStationData = null;
                listStationData = element.wStation


                // listStationData.forEach(element => {
            //   let  obj =  {
            //         id:20,
            //         name:'20',
            //         slot:'20:00',
            //         active:false
            //     }
                // {
                //     id:2,
                //     name:'2',
                //     slot:'09:30',
                //     active:false
                // },
                setArtists([]);
                setArtists(current =>
                    [...listStationData]);

                //  name = user
                // }   ) 
            }
                     
                });
              if(count !=1){
            //    setAuth({ user, pwd });
            //    setUser('');
            //    setPwd('');
            //    setSuccess(true);
            // listStation = element.wStation
            // else{
                // usersWorkStat.push({username:username,wName:workstation,wStation:myWorkArray[workstation]})
                
                // console.log(usersWorkStat)
              
                let   WorkStationList= JSON.parse(localStorage.getItem("userWorkstation"))
                WorkStationList.push({username:username,wName:workstation,wStation:myWorkArray[workstation]})
                localStorage.setItem("userWorkstation", JSON.stringify(WorkStationList))
           
                setArtists([]);
                setArtists(current =>
                    [...listStationData]);
                // }       
              }
        }
        else{
            usersWorkStat.push({username:username,wName:workstation,wStation:myWorkArray[workstation]})
            
            console.log(usersWorkStat)
          
            localStorage.setItem("userWorkstation", JSON.stringify(usersWorkStat))
            setArtists([]);
            setArtists(current =>
                [...listStationData]);
        
        }        

        // if(localStorage.getItem("userData")){
        //   users= JSON.parse(localStorage.getItem("userData"))
        //   users.forEach(element => {
        //    if(element.username == user && element.password == pwd){
        //      count =1
        //      name = user
        //     }          
        //     });
        //   if(count == 1){
        //    setAuth({ user, pwd });
        //    setUser('');
        //    setPwd('');
        //    setSuccess(true);
        //   }
        //   else{
        //    console.log( "error")
         
        //    // setSuccess(false);
        //    setErrMsg('Login Failed');
        //    errRef.current.focus();
        //    //   setUser('');
        //    // setPwd('');
        // }
        // }
        // else{
        //    console.log( "error")
        //    setUser('');
        //    setPwd('');
        //    setSuccess(false);
        //    setErrMsg('Login Failed');
        //    errRef.current.focus();
        // }
      
        console.log("test",workstation)
        // console.log(auth.user)

        // if()
        // const myWorkArrayData =[
        //     {
        //         id:1,
        //         name:'1',
        //         slot:'09:00',
        //         active:false
        //     },
        //     {
        //         id:2,
        //         name:'2',
        //         slot:'09:30',
        //         active:false
        //     },
        //     {
        //         id:3,
        //         name:'3',
        //         slot:'10:00',
        //         active:false
        //     },
        //     {
        //         id:4,
        //         name:'4',
        //         slot:'10:30',
        //         active:false
        //     },
        //     {
        //         id:5,
        //         name:'5',
        //         slot:'11:00',
        //         active:false
        //     },
        //     {
        //         id:6,
        //         name:'6',
        //         slot:'11:30',
        //         active:false
        //     },
        //     {
        //         id:7,
        //         name:'7',
        //         slot:'12:00',
        //         active:false
        //     },
        //     {
        //         id:8,
        //         name:'8',
        //         slot:'12:30',
        //         active:false
        //     },
        //     {
        //         id:9,
        //         name:'9',
        //         slot:'01:00',
        //         active:false
        //     },
        //     {
        //         id:10,
        //         name:'10',
        //         slot:'01:30',
        //         active:false
        //     },
        //     {
        //         id:11,
        //         name:'11',
        //         slot:'02:00',
        //         active:false
        //     }
        // ]
        
      };  

    

    
    return (
         
         
        <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
            {/* <span class="fs-4">Workstation Application:</span> */}
            <div  class="fs-4 dataRight">Welcome :{LoggedUser}</div>

          </a>
        </header>
    
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Workstation Application:</h1>
            <p class="col-md-8 fs-4">Please read the below notes carefully</p>
            {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
          </div>
        </div>
    
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Workstation details:</h2>
              <button class="btn btn-outline-light" style={{ backgroundColor: active1 ? "lightGray" : "" }}  onClick={()=>handleClick('M1')} type="button">Workstation 1</button>
              <button class="btn btn-outline-light"  onClick={()=>handleClick('M2')} type="button" style={{ backgroundColor: active2 ? "lightGray" : "" }}>Workstation 2</button>
              <button class="btn btn-outline-light"  onClick={()=>handleClick('M3')} type="button" style={{ backgroundColor: active3 ? "lightGray" : "" }}>Workstation 3</button>

              {/* <button class="btn btn-outline-light" className='mButton' type="button">Machine 2</button>
              <button class="btn btn-outline-light"  className='mButton'>Machine 3</button>
              <button class="btn btn-outline-light"  className='mButton'>Machine 4</button> */}
                                 <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

              <p>Your selected Workstations: 
                {/* {workcount} */}
                </p>
              {
                    workstat.map(data => (  
                    // <li>  
                    <div>
                        <h4>Workstation: {data.workstation}  :   Time:{data.slot}</h4>
                    </div>//   </li>  
                    ))}  

            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>Select scheduled Hours:</h2>
              <p>Please choose slots.</p>
              {/* <button class="btn btn-outline-secondary" type="button">Example button</button> */}
               {/* /// */}
                    {
                    artists.map(product => (  
                    // <li>  
<button class="btn btn-outline-primary" onClick={()=>workflowClick(product.slot)}  style={{ backgroundColor: product.active ? "red" : "green" }}  type="button"  >{product.slot}</button>                  
//   </li>  
                    ))}  

                    {/* </div>  
                    );  
                    }   */}

               {/* // */}
           
            </div>
          </div>
        </div>
    
        <footer class="pt-3 mt-4 text-muted border-top">
         <p style={{color:'red'}}> © 2022</p>
        </footer>
      </div>

            
        
    )
}

export default Machine
