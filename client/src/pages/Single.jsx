import React from "react";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" />
        <div className="user">
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" />
          <div className="info">
            <span>Name</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p>
          Wow! These are some good-looking logs! There’s even a semblance of a
          branched tree beside it. These logs show you who has been working on
          what, when changes were made, and where your changes fit into the
          bigger picture. --graph adds the tree graph to the left. It’s not the
          most stylish graph, but it helps to visualize changes in the project’s
          branches. (Read the docs here.) --format lets you customize the format
          of your logs. There are preset formats to choose from, or you can
          write your own format like this example. (Read the docs here.) --all
          includes all of the refs, tags, and branches in the logs (including
          remote branches). You might not want everything so adjust this as you
          see fit. (Read the docs here.) See the git-log docs for more
          information on how you can level up your git logs. → Understanding a
          particular commit You’ll often want to understand what’s happening
          with a specific commit. git show can show you a high-level view of
          changes in a commit, but it also lets you see changes to specific
          files.
        </p>
        <p>
          Wow! These are some good-looking logs! There’s even a semblance of a
          branched tree beside it. These logs show you who has been working on
          what, when changes were made, and where your changes fit into the
          bigger picture. --graph adds the tree graph to the left. It’s not the
          most stylish graph, but it helps to visualize changes in the project’s
          branches.  git show can show you a high-level view of
          changes in a commit, but it also lets you see changes to specific
          files.
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
