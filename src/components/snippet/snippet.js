import React, { useState } from 'react'
import axios from 'axios'
import Editor from 'react-simple-code-editor';
import Header from "./../header/Header"
import * as S from "./style"
import * as B from "./../style"

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike"
import "prismjs/components/prism-python"
import "prismjs/themes/prism.css";


const SnippetPage = () => {
    const [inputs, setInputs] = useState({
        title: '',
        language: 'py',
        description: '',
        code: 'def add(a, b):\n   return a + b',
    });
    const { title, language, description, code } = inputs;

    const onCreateSnippet = async () => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/code`, {
            title: title,
            language: language,
            content: code,
            description: description
        }, {
            headers: {
                'Authorization': localStorage.getItem('accessToken'),
                'content-type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch(() => {  // API 호출이 실패한 경우
            alert('코드 생성 에러');  // 에러표시
        });
    }
    
    const onChangeInput = (e) => {
        const { value, name } = e.target;
        console.log(value, name)
        setInputs({
          ...inputs,
          [name]: value,
        });
      };

    return (
        <B.BaseBackground>
            <Header/>
            <S.SnippetCotainer>
                <S.SnippetInputsContainer>
                    <form>
                        <S.HeadContainer>
                            <S.SnippetTitle
                                type="text"
                                placeholder="snippet title"
                                name="title"
                                value={title}
                                onChange={onChangeInput}
                            />
                            <S.LangDropdownSelect>
                                <S.LangDropdownOption value={language}>Python</S.LangDropdownOption>
                            </S.LangDropdownSelect>
                        </S.HeadContainer>
                        <S.SnippetCodeSection>
                            <Editor
                            value={code}
                            onValueChange={(code) => setInputs({
                                ...inputs,
                                'code': code,
                            })}
                            padding={10}
                            highlight={code => highlight(code, languages[language])}
                            style={{
                                height: '24rem',
                                fontFamily: 'monospace',
                                fontSize: 16,
                            }}
                            />
                        </S.SnippetCodeSection>
                        <S.SnippetDescription
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={onChangeInput}
                        />
                    </form>
                    <S.SnippetAddButton onClick={onCreateSnippet}>
                        ADD
                    </S.SnippetAddButton>
                </S.SnippetInputsContainer>
            </S.SnippetCotainer>
        </B.BaseBackground>
    );
};

export default SnippetPage;