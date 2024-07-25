
import React from 'react';
import styles from './icon.css';
import { BlockIcon, CommentIcon, SaveIcon, SendIcon, WarningIcon } from '../Icons';
import classNames from 'classnames';

type TSizes = 20 | 18 | 16 | 14 | 12 | 10;

interface IIconProps {
  name?: "block" | "comment" | "save" | "send" | "warning";
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon(props: IIconProps) {
  const {
    name = "block",
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const IconComponent = {
    block: BlockIcon,
    comment: CommentIcon,
    save: SaveIcon,
    send: SendIcon,
    warning: WarningIcon,
  }[name];

  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
  );

  if (!IconComponent) {
    return <div>Неизвестная икона</div>;
  }

  return <IconComponent className={classes}/>;
}