<<<<<<< HEAD
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNowStrict } from 'date-fns';
import { AiOutlineHeart, AiOutlineMessage, AiFillHeart } from 'react-icons/ai';

import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import Avatar from '../Avatar';
import useLike from '@/hooks/useLike';
=======
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { formatDistanceToNowStrict } from "date-fns";
import { AiOutlineHeart, AiOutlineMessage, AiFillHeart } from "react-icons/ai";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import Avatar from "../Avatar";
import useLike from "@/hooks/useLike";
>>>>>>> 82a5541 (checking)

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data?.id, userId });

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data?.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data?.id]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      toggleLike();
    },
    [loginModal, currentUser, toggleLike]
  );

  const createAt = useMemo(() => {
    if (!data?.createAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createAt));
<<<<<<< HEAD
  }, [data?.createdAt]);
=======
  }, [data?.createAt]);
>>>>>>> 82a5541 (checking)

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <div
      onClick={goToPost}
      className="border-b-[1px] border-neutral-800
      p-5 cursor-pointer hover:bg-neutral-900 transition"
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data?.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="text-white font-semibold
            cursor-pointer hover:underline"
            >
              {data?.user.name}
            </p>
            <span
              onClick={goToUser}
              className="text-neutral-500 cursor-ointer
            hover:underline hidden md:block
            "
            >
              @{data?.user.username}
            </span>
            <span className="text-neutral-500 text-sm">{createAt}</span>
          </div>
          <div className="text-white mt-1">{data?.body}</div>
          <div className=" flex flex-row items-center mt-3 gap-10 ">
            <div
              className="flex flex-row items-center text-neutral-500 gap-2
                cursor-pointer transition hover:text-sky-500
            "
            >
              <AiOutlineMessage size={20} />
              <p>{data?.comments?.length || 0}</p>
            </div>
            <div
              onClick={onLike}
              className="flex flex-row items-center text-neutral-500 gap-2
                cursor-pointer transition hover:text-red-500
            "
            >
<<<<<<< HEAD
              <LikeIcon size={20} color={hasLiked ? 'red' : ''} />
=======
              <LikeIcon size={20} color={hasLiked ? "red" : ""} />
>>>>>>> 82a5541 (checking)
              <p>{data?.likedIds.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
