import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {MdHome} from 'react-icons/md';
import { BsBagFill } from 'react-icons/bs';
import {MdOutlineList } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import {RiPlayListAddLine} from 'react-icons/ri';
import { AiTwotoneAccountBook } from 'react-icons/ai';
import {IoMdCall } from 'react-icons/io';
import { MdOutlineNotes } from 'react-icons/md';
import { RiLogoutBoxRFill } from 'react-icons/ri';



import styles from "../CssComponent/Navbar.module.css"


export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} style={{backgroundColor:"none",background:"none",fontSize:"20px"}} onClick={onOpen}>
        <AiOutlineMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
                      <div className={styles.NavBar} style={{marginLeft:"-23px"}}>
                    <div className={styles.main}>    
                <div className={styles.NavBarCart}>
                <AiOutlineMenu style={{marginTop:"12px",marginLeft:"14px"}}/>
                </div>
                <div  className={styles.NavBarimg}>
                <img src="https://assets.interntheory.com/creative/logo.png" alt='rr' />
                </div>
                </div>
                </div>
           <div style={{display:"flex",flexDirection:"column",gap:"20px",marginLeft:"20px",marginTop:"70px"}} className={styles.raja}>

             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><MdHome/> <p>Home</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><MdOutlineList/> <p>Internship</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><BsBagFill/> <p>Jobs</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><RiPlayListAddLine/> <p>Post Internship</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><AiTwotoneAccountBook/> <p>cources</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><IoMdCall/> <p>Contact Us</p></div>
             <hr />
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><MdOutlineNotes/> <p>Register</p></div>
             <div style={{display:"flex",gap:"14px",fontSize:"18px",fontWeight:"bold",color: "#446478"}}><RiLogoutBoxRFill/> <p>Login</p></div>

           </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}