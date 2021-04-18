import React from 'react'
import Header from "./../header/Header"
import * as S from "./style";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

 

const SnippetsPage = () => {
    return (
        <div>
            <Header/>
            <S.HeadContainer>
                {/* <form noValidate autoComplete="off"> */}
                    <S.SearchBar label="검색어를 입력하세요" variant="outlined" id="outlined-basic"/>
                    <S.LargeSearchIcon fontSize="large"/>
                {/* </form> */}
            </S.HeadContainer>
            
            <S.MainContainer>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>

                        <ListItemText
                        primary="Title"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Created 10 minutes ago
                            </Typography>
                            <br/>
                            {" - Description"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                </List>
            </S.MainContainer>
        </div>
    );
}


export default SnippetsPage;