import React from 'react';
import './css/main.css';
import './css/project-item.css';

let goToUrl = (url) => {
  window.open(url);
}

function ProjectItem(props) {

  return (
    <div className="project-item" onClick={goToUrl.bind(null, props.url)}>
      <a className="project-title" href="#">{props.name}</a>
      <p className="project-desc">{props.desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-4 maroon-text">Hi~</h1>
        <h2 className="mb-5 maroon-text">I'm Leo Sirius, a senior markdown engineer :)</h2>
        <p className="mt-5 font-weight-bold">You can contact me through following ways</p>
        <ul>
          <li><span className="font-weight-bold">Emails: </span>is.li.xiaoyu@qq.com, leosirius666@gmail.com (choose one, both work)</li>
          <li><span className="font-weight-bold">Github: </span><a target="_blank" href="https://github.com/LeoSirius">https://github.com/LeoSirius</a></li>
        </ul>
        <div>
          <h2 className="maroon-text">Projects</h2>
          <div className="project-list">
            <ProjectItem
              url={"https://leosirius.fun/"}
              name={"blog"}
              desc={"blog"}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/leetcode_solutions"}
              name={"leetcode刷题笔记"}
              desc={"几乎每题都有解题思路和单元测试，不断补充中"}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_apue"}
              name={"apue - 代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_unp"}
              name={"unp - 代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_beginning_linux_programming"}
              name={"linux程序设计 - 代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_cpp_primer"}
              name={"c++ primer - 代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_linux_shell"}
              name={"linux命令行与shell脚本编程大全 - 代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_js_for_web_developers"}
              name={"js高级程序设计 - 代码"}
              desc={"持续更新中..."}
            />
          </div>
          <div className="footer">
            <h5 className="maroon-text">关于本站</h5>
            <a href="https://github.com/LeoSirius/react-gh-pages" className="footer-title">本站源码</a>
            <p>本站是我的个人导航站。本站是用react写的静态网站，用gh-pages把编译后的代码托管到github pages仓库里</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
