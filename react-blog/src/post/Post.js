import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="https://cdn.pixabay.com/photo/2020/07/04/20/12/green-lizard-5370821_960_720.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor, sit amet consectetur adipisicntore incidunt id explicabo ad reprehenderit mas dolores tenetur ipsum nisi!
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    </div>
  )
}
