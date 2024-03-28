import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {selectPosts} from "../store/slices/posts";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

export const useStore = (callback, clearCallback) => {
  const { postId } = useParams<{ postId: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (callback && clearCallback) {
      dispatch(callback(postId))

      return () => dispatch(clearCallback());
    }
  }, []);

  return {...useAppSelector(selectPosts), dispatch};
}
