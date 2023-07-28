import { useState, useRef, useEffect } from "react";

//Blogging App using Hooks
export default function Blog() {

    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("")

    // useReducer Syntax:

    // const [state, dispatch] = useReducer(reducer, initialArg, init)
    // const [state, dispatch] = useReducer(reducer, initialArg)


    const [formData, setFromData] = useState({ title: "", content: "" })
    const [blogs, setBlog] = useState([]);
    const titleRef = useRef(null)

    useEffect(() => {
        titleRef.current.focus();
    }, [])

    useEffect(() => {
        if (blogs.length && blogs[0].title) {
            document.title = blogs[0].title
        }
        else {
            document.title = "NO BLOGS!!"
        }
    }, [blogs])

    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e) {
        e.preventDefault();

        setBlog([{ title: formData.title, content: formData.content }, ...blogs])
        setFromData({ title: "", content: "" });

        titleRef.current.focus();
    }

    function removeBlog(i) {
        setBlog(blogs.filter((blog, index) => i !== index)
        )
    }

    return (
        <>
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>

            {/* Division created to provide styling of section to the form */}
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>

                    {/* Row component to create a row for first input field */}
                    <Row label="Title">
                        <input className="input"
                            ref={titleRef}
                            placeholder="Enter the Title of the Blog here.." value={formData.title} onChange={(e) => setFromData({ title: e.target.value, content: formData.content })} />
                    </Row >

                    {/* Row component to create a row for Text area field */}
                    <Row label="Content">
                        <textarea className="input content"
                            required
                            placeholder="Content of the Blog goes here.." value={formData.content} onChange={(e) => setFromData({ title: formData.title, content: e.target.value })} />
                    </Row >

                    {/* Button to submit the blog */}
                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div className="blog" key={i}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>

                    <div className="blog-btn">
                        <button onClick={() => removeBlog(i)} className="btn remove">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}


// mcq
// The complexity and the number of React components in your project is growing rapidly. You have been asked to reduce the complexity and improve the overall project structure. Which of the following actions will you take?

// ans:
// Use the useReducer() hook to consolidate the state update logic in a single function.
// Replace the useState() hook with the useReducer() hook in the components where it is necessary.

// The useReducer() hook can help us manage the state in a more structured and predictable way, which can reduce the complexity of our components and improve the overall organization of our code. Option A is not ideal because it can lead to duplicated state management logic across multiple components. Option C helps avoid unnecessary re-renders, but may not improve project structure