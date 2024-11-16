import { MdEvent, MdGroupWork, MdGroupOff  } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaPeopleGroup, FaObjectGroup, FaGroupArrowsRotate  } from "react-icons/fa6";
import { GiGroupedDrops } from "react-icons/gi";
import { HiMiniRectangleGroup } from "react-icons/hi2";

export const dataHeaderLeft = [{
    heading: 'Xã hội',
    list: [
        {
            icon: MdEvent ,
            title: 'Sự kiện',
            descript: 'Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.'
        },
        {
            icon: FaLayerGroup,
            title: 'Nhóm',
            descript: 'Kết nối với những người có sở thích giống bạn trong các nhóm cộng đồng.'
        },
        {
            icon: FaPeopleGroup,
            title: 'Trang cá nhân',
            descript: 'Xem và cập nhật thông tin bạn bè và những người bạn theo dõi.'
        },
        {
            icon: MdGroupWork,
            title: 'Thông báo',
            descript: 'Nhận thông báo về những cập nhật và hoạt động của bạn bè.'
        },
        {
            icon: GiGroupedDrops ,
            title: 'Tin nhắn',
            descript: 'Gửi và nhận tin nhắn tức thời với bạn bè và gia đình.'
        },
        {
            icon: HiMiniRectangleGroup,
            title: 'Thị trường',
            descript: 'Mua bán và trao đổi các sản phẩm trong cộng đồng của bạn.'
        }
        ]
    },
    {
        heading: 'giải trí',
        list:[
            {
                icon: MdGroupOff ,
                title: 'Trò chơi phổ biến',
                descript: 'Khám phá các trò chơi đang thịnh hành và được nhiều người chơi yêu thích.'
            },
            {
                icon: FaObjectGroup ,
                title: 'Trò chơi bạn bè',
                descript: 'Kết nối và chơi các trò chơi trực tuyến cùng bạn bè của bạn.'
            },
            {
                icon: FaGroupArrowsRotate ,
                title: 'Thử thách hàng ngày',
                descript: 'Hoàn thành các thử thách hàng ngày để nhận thưởng và nâng cấp.'
            }
        ]
    }]