import { useState } from "react";
import PostsList from "./Posts/PostsList";

function App() {
    const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
    return (
        <main>
            {!isShowingMessage ? (
                <button
                    type="button"
                    onClick={() => setIsShowingMessage(!isShowingMessage)}
                >
                    Click me
                </button>
            ) : (
                <div>
                    <h2>Hello!</h2>
                    <button
                        onClick={() => setIsShowingMessage(!isShowingMessage)}
                    >
                        See ya later!
                    </button>
                </div>
            )}
            <br></br>
            <PostsList />
        </main>
    );
}

export default App;
