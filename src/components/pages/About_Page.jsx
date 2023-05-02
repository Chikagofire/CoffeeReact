import Title_Page from "../sections/Title_Page";

function About_Page({data_about}){
    console.log(data_about)
    return(
        <>
            <Title_Page/>
            <span>{data_about}</span>
        </>
    )
}

export default About_Page;