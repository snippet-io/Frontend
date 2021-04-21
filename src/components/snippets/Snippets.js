import React, { useState } from 'react'
import Header from "./../header/Header"
import * as S from "./style";
import axios from 'axios';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

 
async function getCodes(limit=10, offset=0) {
    return await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/codes?limit=${limit}&offset=${offset}`
    );
}

function Code(props) {

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>

                <ListItemText
                primary={props.title}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        {props.datetime}
                    </Typography>
                    <br/>
                    {` - ${props.datetime}`}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    );
}


const SnippetsPage = async () => {
    const codes = await getCodes();
    console.log(codes);
    const codeItems = codes.map((code) => 
        <Code key={code.id} 
              title={code.title}
              description={code.description}
              datetime={code.created_datetime} />
    );

    return (
        <div>
            <Header/>

            {/*}
            <S.HeadContainer>
                <form noValidate autoComplete="off">
                    <S.SearchBar label="검색어를 입력하세요" variant="outlined" id="outlined-basic"/>
                    <S.LargeSearchIcon fontSize="large"/>
                </form>
            </S.HeadContainer>
            */}
            
            <S.MainContainer>
                <List>
                    <codeItems/>
                </List>
            </S.MainContainer>
        </div>
    );
}


export default SnippetsPage;