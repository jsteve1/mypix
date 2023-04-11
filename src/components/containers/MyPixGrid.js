import PictureBlock from "../pix/PictureBlock";
import { useSelector } from "react-redux";
import { selectPics } from "../../app/picSlice";

export default function MyPixGrid() {
    const pics = useSelector(selectPics);

    const getPics = () => {
        console.log(pics);
        return pics.map((pic, i) => {
            return (
                <PictureBlock key={i} img={pic} />
            )
        }); 
    }

    return (
        <>
            { getPics() }
        </>
    )
}