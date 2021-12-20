import { gql } from "@apollo/client";

export const GETMEMBER_MT = gql`
  mutation SignIn($email: String!, $password: String!, $key:String!) {
    signIn(email: $email, password: $password, key:$key) {
        id
        email
        name
        cash
        level
        jwt
    }
  }
`;



export const REPLY = gql`
  mutation Reply($type: String!, $idx: Int!) {
    reply(type: $type, idx: $idx) {
      idx
      parent
      content
      user
      nick
      rdate 
      img
    }
  }
`;

export const SETREPLY = gql`
  mutation Setreply($type: String!, $idx: Int!, $parent: Int!, $content: String!, $email: String!) {
    setreply(type: $type, idx: $idx, parent: $parent, content: $content, email: $email) {
      idx
      parent
      content
      user
      nick
      rdate 
      img
    }
  }
`;

export const DELREPLY = gql`
  mutation Delreply($type: String!, $idx: Int!, $idx2: Int!) {
    delreply(type: $type, idx: $idx, idx2: $idx2) {
      idx
      parent
      content
      user
      nick
      rdate 
      img
    }
  }
`;

export const MODREPLY = gql`
  mutation Modreply($type: String!, $idx: Int!, $idx2: Int!, $content: String!) {
    modreply(type: $type, idx: $idx, idx2: $idx2, content: $content) {
      idx
      parent
      content
      user
      nick
      rdate 
      img
    }
  }
`;



export const WICK2 = gql`
  mutation Selwick($idx: Int!) {
    selwick(idx: $idx) {
        idx
        user
        content
        tag
        wlike
        cmt
        view
        date
        nick
        family
        img
        status
        address
        rdate
        addr
    }
  }
`;

export const TRADE2 = gql`
  mutation Seltrade($idx: Int!, $email: String!) {
    seltrade(idx: $idx, email: $email) {
        idx
        user
        title
        title2
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        date
        nick
        family
        img
        status
        address
        rdate
        cate1
        cate2
        cate3
        qty
        oper
        country
        veh
        year
        speed
        voltage
        rating
        output
        cooling
        dimension
        weight
        temp
        ulike
        op1
        op2
        op3
        op4
        op5
        op6
        op7
        op8
        op9
        op10
        op11
        op12
        op13
        op14
        op15
        op16
        op17
        op18
        op19
        op20
        eop1
        eop2
        eop3
        eop4
        eop5
        eop6
        eop7
        eop8
        eop9
        eop10
        eop11
        eop12
        eop13
        eop14
        eop15
        eop16
        eop17
        eop18
        eop19
        eop20
    }
  }
`;

export const PLACE2 = gql`
  mutation Selplace($idx: Int!) {
    selplace(idx: $idx) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
    }
  }
`;

export const CONTENTS2 = gql`
  mutation Selcontents($idx: Int!, $email: String!) {
    selcontents(idx: $idx, email: $email) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        rule
        wwhen
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
        ulike
    }
  }
`;

export const HELPME2 = gql`
  mutation Selhelpme($idx: Int!) {
    selhelpme(idx: $idx) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        rule
        wwhen
        wstatus
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
    }
  }
`;


export const JOY2 = gql`
  mutation Seljoy($idx: Int!) {
    seljoy(idx: $idx) {
        idx
        user
        title
        content
        link
        wlike
        cmt
        view
        date
        nick
        family
        img
        status
        address
        rdate
    }
  }
`;


export const WICK = gql`
  mutation Wick($area: String!, $page: Int!) {
    wick(area: $area, page: $page) {
        idx
        user
        content
        tag
        wlike
        cmt
        view
        date
        nick
        family
        img
        status
        address
        rdate
        addr
    }
  }
`;

export const TRADE = gql`
  mutation Trade($page: Int!, $stx: String!, $email: String!, $cate1: String!, $cate2: String!, $cate3: String!) {
    trade(page: $page, stx: $stx, email: $email, cate1: $cate1, cate2: $cate2, cate3: $cate3) {
        idx
        user
        title
        title2
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        date
        nick
        family
        img
        status
        address
        rdate
        ulike
        cate1
        cate2
        cate3
        qty
        oper
        country
        veh
        year
        speed
        voltage
        rating
        output
        cooling
        dimension
        weight
        temp
        op1
        op2
        op3
        op4
        op5
        op6
        op7
        op8
        op9
        op10
        op11
        op12
        op13
        op14
        op15
        op16
        op17
        op18
        op19
        op20
        eop1
        eop2
        eop3
        eop4
        eop5
        eop6
        eop7
        eop8
        eop9
        eop10
        eop11
        eop12
        eop13
        eop14
        eop15
        eop16
        eop17
        eop18
        eop19
        eop20
    }
  }
`;

export const PLACE = gql`
  mutation Place($area: String!, $page: Int!, $stx: String!, $email: String!) {
    place(area: $area, page: $page, stx: $stx, email: $email) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
        ulike
    }
  }
`;

export const CONTENTS = gql`
  mutation Contents($area: String!, $page: Int!, $stx: String!, $email: String!) {
    contents(area: $area, page: $page, stx: $stx, email: $email) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
        ulike
    }
  }
`;

export const HELPME = gql`
  mutation Helpme($area: String!, $page: Int!, $stx: String!) {
    helpme(area: $area, page: $page, stx: $stx) {
        idx
        user
        title
        content
        addr1
        addr2
        wlike
        cmt
        view
        price
        wstatus
        img1
        img2
        img3
        img4
        img5
        point
        pcnt
        date
        nick
        family
        img
        status
        address
        rdate
    }
  }
`;


export const JOY = gql`
  mutation Joy($area: String!, $page: Int!) {
    joy(area: $area, page: $page) {
        idx
        user
        title
        content
        link
        wlike
        cmt
        view
        date
        nick
        family
        img
        status
        address
        rdate
    }
  }
`;



export const MSGROOM = gql`
  mutation Msgroom($user1: String!) {
    msgroom(user1: $user1) {
      idx
      user1
      user2
      date
      luser
      lmsg
      ldate
      nick
      family
      img
      status
      address
      rdate
      nick2
      family2
      img2
      status2
      address2
      rdate2
    }
  }
`;


export const PROFILE = gql`
  mutation Profile($user: String!) {
    profile(user: $user) {
      idx
      nick
      family
      addr
      addr2
      zip
      rdate
      intro
      img
      img2
      status
      qr
      cert1
      cert2
      wickcnt
      contentscnt
      joycnt
      tradecnt
      helpmecnt
    }
  }
`;

export const SIGNUP = gql`
  mutation SignUp($email: String!, $family: String!, $nick: String!, $pass: String!) {
    signUp(email: $email, family: $family, nick: $nick, pass: $pass) {
        id
        email
        name
        cash
        level
        jwt
    }
  }
`;

export const MODPROFILE = gql`
  mutation Modmember($email: String!, $img: String!, $addr1: String!, $addr2: String!, $zip:String!, $nick: String!, $family: String!, $content: String!, $pass: String!, $img2: String!) {
    modmember(email: $email, img: $img, addr1: $addr1, addr2: $addr2, zip: $zip, nick: $nick, family: $family, content: $content, pass: $pass, img2: $img2) {
        id
        email
        name
        cash
        level
        jwt
    }
  }
`;


export const PRMOD = gql`
  mutation UploadProfilePic($file: Upload!) {
    uploadProfilePic(file: $file)
  }
`;

export const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload) {
    uploadFile(file: $file) {
      id
    }
  }
`;

export const SELAREA = gql`
  mutation Selarea($area: String!) {
    selarea(area: $area) {
      idx
      area1
      area2
      area3
      no1
      no2
      no3
    }
  }
`;


export const WICKWRITE = gql`
  mutation Writewick($email: String!, $content: String!, $tag: String!, $area: String!) {
    writewick(email: $email, content: $content, tag: $tag, area: $area) {
        idx        
    }
  }
`;

export const TRADEWRITE = gql`
  mutation Writetrade($email: String!, $title: String!, $content: String!, $addr1: String!, $addr2: String!, $img: String!, $price: Int!) {
    writetrade(email: $email, title: $title, content: $content, addr1: $addr1, addr2: $addr2, img: $img, price: $price) {
        idx        
    }
  }
`;


export const PLACEWRITE = gql`
  mutation Writeplace($email: String!, $title: String!, $content: String!, $addr1: String!, $addr2: String!, $img: String!, $price: Int!) {
    writeplace(email: $email, title: $title, content: $content, addr1: $addr1, addr2: $addr2, img: $img, price: $price) {
        idx        
    }
  }
`;

export const CONTENTSWRITE = gql`
  mutation Writecontents($email: String!, $title: String!, $content: String!, $addr1: String!, $addr2: String!, $img: String!, $price: Int!, $wwhen: String!, $rule: String!) {
    writecontents(email: $email, title: $title, content: $content, addr1: $addr1, addr2: $addr2, img: $img, price: $price, wwhen: $wwhen, rule: $rule) {
        idx        
    }
  }
`;

export const HELPMEWRITE = gql`
  mutation Writehelpme($email: String!, $title: String!, $content: String!, $addr1: String!, $addr2: String!, $img: String!, $price: Int!, $wwhen: String!, $rule: String!) {
    writehelpme(email: $email, title: $title, content: $content, addr1: $addr1, addr2: $addr2, img: $img, price: $price, wwhen: $wwhen, rule: $rule) {
        idx        
    }
  }
`;

export const KEYWORD = gql`
  mutation Getkeyword($type: String!) {
    getkeyword(type: $type) {
        word        
    }
  }
`;

export const USER = gql`
  mutation GetUserInfo($did: String!) {
    getUserInfo(did: $did) {
        did
        name
        company
        tel     
    }
  }
`;

export const SETUSER = gql`
  mutation SetUserInfo($did: String!, $name: String!, $company: String!, $tel: String!) {
    setUserInfo(did: $did, name: $name, company: $company, tel: $tel) {
        did
        name
        company
        tel     
    }
  }
`;

export const SETINQUIRE = gql`
  mutation SetInquire($did: String!, $idx: Int!, $content: String!) {
    setInquire(did: $did, idx: $idx, content: $content) {
        rst    
    }
  }
`;

export const GETINQUIRE = gql`
  mutation GetInquire($did: String!, $date: String!) {
    getInquire(did: $did, date: $date) {
        idx
        idx2
        name
        company
        tel
        title
        title2
        content
        img1
        status
        cate1
        cate2
        cate3
        qty
        oper
        country
        veh
        year
        speed
        voltage
        rating
        output
        cooling
        dimension
        weight
        temp   
        cont
        reply 
    }
  }
`;

export const GETINQUIRE2 = gql`
  mutation GetInquire2($idx: Int!) {
    getInquire2(idx: $idx) {
        idx
        idx2
        name
        company
        tel
        title
        title2
        content
        img1
        status
        cate1
        cate2
        cate3
        qty
        oper
        country
        veh
        year
        speed
        voltage
        rating
        output
        cooling
        dimension
        weight
        temp   
        cont
        reply 
    }
  }
`;


export const GETINQUIREDATE = gql`
  mutation GetInquireDate($did: String!) {
    getInquireDate(did: $did) {
        date
    }
  }
`;


export const PLUS = gql`
  mutation GetBanner($type: String!) {
    getBanner(type: $type) {
        idx
        idx2
        type
        title
        title2
        content
        img1
        date
        status
        cate1
        cate2
        cate3
        qty
        oper
        country
        veh
        year
        speed
        voltage
        rating
        output
        cooling
        dimension
        weight
        temp
    }
  }
`;

export const SUB = gql`
  mutation GetSub($cate1: String!, $cate2: String!) {
    getSub(cate1: $cate1, cate2: $cate2) {
        name
    }
  }
`;

export const FILTER = gql`
  mutation GetFilter($type: String!) {
    getFilter(type: $type) {
        name
    }
  }
`;

export const FAVOR = gql`
  mutation SetFavor($did: String!, $idx: Int!, $type: String!) {
    setFavor(did: $did, idx: $idx, type: $type) {
      idx
      idx2
      title
      title2
      img1
      cate1
      cate2
      cate3
    }
  }
`;

export const FAVOR2 = gql`
  mutation GetFavor($did: String!) {
    getFavor(did: $did) {
        idx
        idx2
        title
        title2
        img1
        cate1
        cate2
        cate3
    }
  }
`;
