import React, { useState } from "react";
import styled from "styled-components";
import PostAuthorImage from "@/assets/png/postAuthor.png";
import Image from "next/image";
import { CommentIcon, LikeIcon } from "@/assets/svgr";
import { PostState } from "@/store/features/post/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { likeAsyncActions } from "@/store/features/like";
import { postActions, postAsyncActions } from "@/store/features/post";
import Link from "next/link";
import * as process from "process";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/UI";
import SvgUploadIcon from "@/assets/svgr/UploadIcon";
import { AddCommentForm } from "../AddCommentForm";
import { CommentList } from "../CommentList";

interface FeedItemProps {
    variant?: "primary" | "profile";
    info: PostState;
    isAdmin?: boolean;
}

interface FormFields {
    content: string;
    image: FileList;
}

export const FeedItem: React.FC<FeedItemProps> = ({
    variant = "primary",
    info,
    isAdmin = false
}) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);
    const postDate = new Date(info.createdAt);
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormFields>({defaultValues: {
        content: info.content
    }});
    const isLiked = info.likes
        .map((el) => el.userId)
        .includes(user ? user.id : 0);

    const date = {
        day:
            postDate.getDate() < 10
                ? `0${postDate.getDate()}`
                : postDate.getDate(),
        month:
            postDate.getMonth() < 9
                ? `0${postDate.getMonth() + 1}`
                : postDate.getMonth() + 1,
        year: postDate.getFullYear(),
    };
    const [isEditActive, setIsEditActive] = useState<boolean>(false);
    const [isControlActive, setIsControlActive] = useState<boolean>(false);


    const handleLikeClick = () => {
        if (user) {
            dispatch(
                likeAsyncActions.create({ userId: user.id, postId: info.id })
            );
            dispatch(
                postActions.toggleLike({
                    userId: user.id,
                    postId: info.id,
                    id: Date.now(),
                })
            );
        }
    };

    const editPost: SubmitHandler<FormFields> = (formData) => {
        dispatch(
            postAsyncActions.edit({
                content: formData.content,
                postId: info.id,
                image: formData.image[0],
            })
        ).then((res) => {
            setIsEditActive(false)
        })
    };

    const handleDeleteClick = () => {
        dispatch(postAsyncActions.remove({postId: info.id}))
    };

    return (
        <Container $variant={variant}>
            <EditModal $isActive={isEditActive} onClick={() => setIsEditActive(false)}>
                <EditContent onClick={(e) => e.stopPropagation()}>
                    <CloseBtn onClick={() => setIsEditActive(false)}>
                        +
                    </CloseBtn>
                    <Title>Редактирование</Title>
                    <Form onSubmit={handleSubmit(editPost)}>
                        <FormInput
                            errors={errors.content}
                            getValues={getValues}
                            name="content"
                            placeholder="Текст записи"
                            register={register}
                        />
                        <AddImageButton>
                            <SvgUploadIcon fill="#fff" />
                            <FormImageInput
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                {...register("image")}
                            />
                        </AddImageButton>

                        <SendMailBtn>
                            <SendMailBtnText>Сохранить</SendMailBtnText>
                        </SendMailBtn>
                    </Form>
                </EditContent>
            </EditModal>
            <ProfileContainer>
                <Profile>
                    {info.user.image ? (
                        <ProfileImage
                            src={
                                process.env.NEXT_PUBLIC_IMAGE_URL +
                                info.user.image
                            }
                            alt=""
                        />
                    ) : (
                        <UnknownImage $variant={variant}>
                            <SvgUnknownProfile fill="#306EEA" />
                        </UnknownImage>
                    )}

                    <ProfileInfo>
                        <ProfileName
                            $variant={variant}
                            href={`/profile/${info.userId}`}
                        >
                            {info.user.name} {info.user.surname}
                        </ProfileName>
                        <PostDate>
                            {date.day}.{date.month}.{date.year}
                        </PostDate>
                    </ProfileInfo>
                </Profile>
                {user && info.user.id === user.id && variant === "profile" || isAdmin ? (
                    <EditControl onClick={() => setIsControlActive(!isControlActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <EditContainer $isActive={isControlActive}>
                            <EditButton $variant={variant} onClick={() => setIsEditActive(true)}>
                                Редактировать
                            </EditButton>
                            <EditButton $variant={variant} onClick={handleDeleteClick}>Удалить</EditButton>
                        </EditContainer>
                    </EditControl>
                ) : <></>}
            </ProfileContainer>
            <PostText $variant={variant}>{info.content}</PostText>
            {info.image && (
                <PostImages>
                    <PostImagesItem
                        src={process.env.NEXT_PUBLIC_IMAGE_URL + info.image}
                        alt=""
                    />
                </PostImages>
            )}
            <Navigation>
                <NavigationItem onClick={handleLikeClick}>
                    <LikeIcon fill={isLiked ? "red" : "#444"} />
                    <NavigationText>{info.likes.length}</NavigationText>
                </NavigationItem>
                <NavigationItem>
                    <CommentIcon />
                    <NavigationText>{info.comments.length}</NavigationText>
                </NavigationItem>
            </Navigation>
            <CommentList postInfo={info} />
        </Container>
    );
};

const Container = styled.div<{ $variant: "primary" | "profile" }>`
    background: ${({ $variant }) =>
        $variant === "primary" ? "#FFFFFF" : "#060419"};
    border-radius: 23px;
    padding: 21px 15px;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 17px;
    transition: all 0.5s ease;
    box-shadow: ${({ $variant }) =>
        $variant === "primary"
            ? "2px 4px 10px 1px rgba(0, 0, 0, 0.15)"
            : "2px 4px 10px 1px rgba(255, 255, 255, 0.15)"};
    &:hover {
        box-shadow: ${({ $variant }) =>
            $variant === "primary"
                ? "2px 4px 10px 1px rgba(0, 0, 0, 0.25)"
                : "2px 4px 10px 1px rgba(255, 255, 255, 0.25)"};
    }
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const FormInput = styled(Input<FormFields>)`
    width: 100%;
`;

const AddImageButton = styled.div`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 17px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border: none;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 14px #346bea;
    }
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`;
const FormImageInput = styled.input`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
`;
const SendMailBtn = styled.button`
    padding: 9px 0;
    justify-content: center;
    position: relative;
    border-radius: 26px;
    display: flex;
    align-items: center;
    gap: 19px;
    background: #fff;
    border: none;
    cursor: pointer;
    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 26px;
        background: linear-gradient(
            90deg,
            #306eea 0%,
            #306eea 0.01%,
            #a200db 100%
        );
    }
`;
const SendMailBtnText = styled.p`
    font-weight: 700;
    font-size: 12px;
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
`;
const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #000;
    transform: rotate(45deg);
    transform-origin: center;
    font-weight: 700;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
const EditModal = styled.div<{$isActive: boolean}>`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: ${({$isActive}) => $isActive ? "flex" : "none"};
    justify-content: center;
    padding-top: 40px;
`;
const EditContent = styled.div`
    background: #fff;
    padding: 20px 40px;
    position: relative;
    z-index: 10;
    align-self: flex-start;
    border-radius: 15px;
`;
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
`;
const EditControl = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 0;
    gap: 4px;
    span {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background: #979797;
        position: relative;
    }
`;
const EditContainer = styled.div<{ $isActive: boolean }>`
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(120%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s ease;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
`;
const EditButton = styled.p<{$variant: string}>`
    cursor: pointer;
    font-weight: 500;
    color: ${({$variant}) => $variant === "primary" ? "#000" : "#fff"};
    font-size: 14px;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const ProfileImage = styled.img`
    border-radius: 100%;
    width: 64px;
    height: 64px;
    object-fit: cover;
`;
const UnknownImage = styled.div<{ $variant: "primary" | "profile" }>`
    border-radius: 100%;
    width: 64px;
    height: 64px;
    background: ${({ $variant }) => $variant === "profile" && "#060419"};
    svg {
        width: 100%;
        height: 100%;
    }
`;
const ProfileName = styled(Link)<{ $variant: "primary" | "profile" }>`
    font-weight: 700;
    font-size: 16px;
    color: #333;
    color: ${({ $variant }) => $variant === "profile" && "#fff"};
`;
const PostDate = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #6a6a6a;
`;
const PostText = styled.p<{ $variant: "primary" | "profile" }>`
    font-weight: 600;
    font-size: 16px;
    color: ${({ $variant }) =>
        $variant === "primary" ? "#454545" : "#DBDBDB"};
    width: 100%;
`;
const PostImages = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`;
const PostImagesItem = styled.img`
    width: 326px;
    max-height: 249px;
    object-fit: cover;
    border-radius: 26px;
    flex: auto;
`;
const Navigation = styled.div`
    display: flex;
    gap: 39px;
    align-items: center;
`;
const NavigationItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;
const NavigationText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #444444;
`;
