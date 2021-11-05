import { useEffect } from "react";
import { useState } from "react";

// useEffect(callback)
// - Gọi callback mỗi khi comp re-render
// - goi callback sau khi component theem  element vao DOM
// useEffect(callback,[])
// Chỉ gọi callback 1 lần sau khi component mounted
// useEffect(callback,[deps])
// callback sẽ được gọi lại mỗi khi deps thay đổi
//------------
// call back luôn được gọi sau componect mounted
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
const lesson = [
  { id: 1, name: " React là gì ? Tại sao nên học react" },
  { id: 2, name: " NodeJS là gì ? Tại sao nên học react" },
  { id: 3, name: " Javscript là gì ? Tại sao nên học react" },
  { id: 4, name: " Php là gì ? Tại sao nên học react" },
];


function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [width, setWidth] = useState(window.innerWidth);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [countdown, setCountdown] = useState(180);
  const [avatar, setAvatar] = useState();
  const [lessonId, setLessonId] = useState(1);
  
  useEffect(() => {
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  
  useEffect(() => {
    document.title = title;
  });
  
  useEffect(() => {
    //   console.log(window.scrollY);
    const handleScore = () => {
      if (window.scrollY >= 1500) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScore);
    //cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScore);
    };
  });
 
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    //cleanup Function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return()=>{
        window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }
  }, [lessonId]);

  
  useEffect(() => {
    //clear up
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  // console.log(type);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
 
 
 
 
  return (
    <div>
      <div>
        <input type="file" onChange={handlePreviewAvatar} />
        {avatar && <img src={avatar.preview} alt="" width="80%" />}
      </div>
      <h2>{countdown}</h2>
      <h1>{width}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <h1> Xin Chao Cac ban</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>
        <ul>
          {posts.map((test) => (
            <li key={test.id}>{test.title || test.name}</li>
          ))}
          {showGoToTop && (
            <button
              style={{
                position: "fixed",
                right: 20,
                bottom: 20,
              }}
            >
              Go to top
            </button>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {lesson.map((less) => (
            <li
              key={less.id}
              style={{
                color: lessonId === less.id ? "red" : "#333",
              }}
              onClick={() => setLessonId(less.id)}
            >
              {" "}
              {less.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Content;
