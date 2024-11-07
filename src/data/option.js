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
    {icon: FaUserFriends, name: 'Trang chủ', path: '/friends'},
    {icon: IoIosPersonAdd, name: 'Lời mời kết bạn', path: 'birthday'},
    {icon: IoPersonAddSharp, name: 'Gợi ý kết bạn', path: 'birthday'},
    {icon: MdCopyAll, name: 'tất cả bạn bè', path: 'birthday'},
    {icon: FaGift, name: 'Sinh nhật', path: 'birthday'},
    {icon: SlOptionsVertical, name: 'Danh sách tùy chỉnh', path: 'birthday'}
]}

export const videosOption = {
    title: 'Video',
    icon: IoMdSettings,
    placeholder: 'tìm kiếm video',    
    linkSidebar: [
        {icon: MdOndemandVideo, name: 'Trang chủ'},
        {icon: FaVideo , name: 'Trực tiếp'},
        {icon: GoVideo , name: 'Reels'},
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