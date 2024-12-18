import ImageComponent from "./ImageComponent"
import VideoComponent from "./VideoComponent"
import ParagraphsComponent from "./ParagraphsComponent"
import ListsComponent from "./ListsComponent"

function MainContext() {
    return (
        <>
            <main>
                <ImageComponent />
                <VideoComponent />
                <ParagraphsComponent />
                <ListsComponent/>
            </main>
        </>
    )
}

export default MainContext