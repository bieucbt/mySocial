import { FaUserFriends, FaVideo } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { IoPersonAddSharp, IoSaveSharp } from "react-icons/io5";
import { MdCopyAll, MdOndemandVideo } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { GoVideo } from 'react-icons/go';
import { TfiVideoClapper } from "react-icons/tfi";
import { BsRocketTakeoffFill } from "react-icons/bs";


export const friendsOption = {
title: 'Friends',
icon: IoMdSettings,    
linkSidebar: [
    {icon: FaUserFriends, name: 'Trang chủ'},
    {icon: IoIosPersonAdd, name: 'Lời mời kết bạn', path: 'request'},
    {icon: IoPersonAddSharp, name: 'Gợi ý kết bạn', path: 'suggestions'},
    {icon: MdCopyAll, name: 'tất cả bạn bè', path: 'allfriend'},
    {icon: FaGift, name: 'Sinh nhật'},
    {icon: SlOptionsVertical, name: 'Danh sách tùy chỉnh', path: 'friendCustom'}
]}

export const videosOption = {
    title: 'Video',
    icon: IoMdSettings,
    placeholder: 'tìm kiếm video',    
    linkSidebar: [
        {icon: MdOndemandVideo, name: 'Trang chủ'},
        {icon: FaVideo , name: 'Trực tiếp'},
        {icon: GoVideo , name: 'Reels', path: '/mySocial/reel'},
        {icon: TfiVideoClapper, name: 'Chương trình'},
        {icon: BsRocketTakeoffFill, name: 'Khám trình'},
        {icon: IoSaveSharp , name: 'Video đã lưu'}
    ]}

export const GroupsOption = {
    title: 'Nhóm',
    icon: IoMdSettings,
    placeholder: 'tìm kiếm nhóm',     
    linkSidebar: [
        {icon: MdOndemandVideo, name: 'Bảng feed của bạn'},
        {icon: FaVideo , name: 'Khám phá'},
        {icon: GoVideo , name: 'Nhóm của bạn'},
    ]}

export const GamesOption = {
    title: 'Chơi game',
    icon: IoMdSettings,   
    placeholder: 'tìm kiếm trong phần chơi game',  
    linkSidebar: [
        {icon: MdOndemandVideo, name: 'Chơi game'},
        {icon: FaVideo , name: 'Thông báo'}
    ]}