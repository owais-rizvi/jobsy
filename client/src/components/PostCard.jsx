import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";

const PostCard = ({ post, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { user } = useAuth();

  const handleLike = async () => {
    // Like functionality not implemented in backend yet
    console.log("Like functionality coming soon");
  };

  const handleComment = async () => {
    // Comment functionality not implemented in backend yet
    console.log("Comment functionality coming soon");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-6 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">
            {post.author?.name?.charAt(0)?.toUpperCase() || 'U'}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div>
              <Link to={`/profile/${post.author?._id}`} className="font-semibold text-gray-900 text-lg hover:text-blue-600 transition duration-200">
                {post.author?.name || 'Unknown User'}
              </Link>
              <p className="text-sm text-gray-500">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="mt-4 rounded-xl max-h-96 w-full object-cover shadow-md"
              />
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition duration-200"
              >
                <HeartIcon className="h-5 w-5" />
                <span className="font-medium">{post.likes?.length || 0} Likes</span>
              </button>

              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg transition duration-200"
              >
                <ChatBubbleLeftIcon className="h-5 w-5" />
                <span className="font-medium">{post.comments?.length || 0} Comments</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 hover:bg-green-50 px-3 py-2 rounded-lg transition duration-200">
                <ShareIcon className="h-5 w-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>

          {showComments && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="space-y-4">
                {post.comments?.map((comment, index) => (
                  <div key={index} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {comment.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {comment.user?.name || 'Unknown User'}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex space-x-3">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                <button
                  onClick={handleComment}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-200 shadow-md"
                >
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
