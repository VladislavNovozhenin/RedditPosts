import { hot } from "react-hot-loader/root";
import * as React from "react";
import { Layout } from "./shared/Layout";
import './main.global.css'
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/Content/CardsList";
import { Provider, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState, rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { saveToken } from "./store/token/actions";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFound } from "./shared/NotFound";
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  const [mounted, setMounted] = useState(false)
  const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch<any>();
  React.useEffect(() => {

    dispatch(saveToken())
  }, [token])

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="posts" element={<CardsList />} >
              <Route path=":id" element={<Post />} />
            </Route>
            <Route path="/" element={<Navigate to='/posts' replace />} />
            <Route path="/auth" element={<Navigate to='/posts' replace />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter >
  )
}

export const App = hot(() =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
);




