import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Breadcrumb, Icon, Divider } from 'antd';
import './Layout.css';
import { Route } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = AntLayout;

export const Layout = ({ children }: any) => (
  <Route component={({ history, location }: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => setIsOpen(!isOpen);
    const selected = location.pathname.split('/')[1];

    return (
      <AntLayout style={{ minHeight: '100vh'}}>
        <Sider
          width={280}
          theme="dark"
          trigger={null}
          collapsed={!isOpen}
          collapsible
        >
          <Header style={{ backgroundColor: '#2c5158', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <svg viewBox="0 0 127 127" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ height: 36, width: 36 }}>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#318E9F" fill-rule="nonzero" cx="63.5" cy="63.5" r="63.5" />
                <path d="M45.2617188,50.9550781 C42.2994644,54.112646 39.9394619,55.6914062 38.1816406,55.6914062 C36.2285059,55.6914062 34.4869868,54.4381636 32.9570312,51.9316406 C31.4596279,49.4576699 30.7109375,46.8372534 30.7109375,44.0703125 C30.7109375,41.3033716 31.3701106,38.8864036 32.6884766,36.8193359 C34.0068425,34.7522683 35.7564995,32.9212319 37.9375,31.3261719 C40.1185005,29.7311118 42.6168479,28.3476621 45.4326172,27.1757812 C48.2483865,26.0039004 51.1699067,25.0436235 54.1972656,24.2949219 C60.1868789,22.7649663 65.2242634,22 69.3095703,22 C73.3948772,22 76.8209497,22.1708967 79.5878906,22.5126953 C82.3548315,22.8544939 85.0240757,23.4160117 87.5957031,24.1972656 C90.1673306,24.9785195 92.5924365,25.9794861 94.8710938,27.2001953 C97.149751,28.4209045 99.1516841,29.8938716 100.876953,31.6191406 C104.522805,35.3626489 106.345703,40.0338262 106.345703,45.6328125 C106.345703,51.4271123 104.522805,57.3678081 100.876953,63.4550781 C97.3613105,69.3470347 92.8040645,74.2297983 87.2050781,78.1035156 C81.2480171,82.1725464 75.2422178,84.2070312 69.1875,84.2070312 C66.2252456,84.2070312 63.621105,83.4746167 61.375,82.0097656 C60.3007759,81.261064 59.747396,80.3903044 59.7148438,79.3974609 C59.6822915,78.4046174 59.6985674,77.5013062 59.7636719,76.6875 C60.0240898,73.3346187 60.7565044,69.395856 61.9609375,64.8710938 C64.3372515,65.8476611 66.8762886,66.3359375 69.578125,66.3359375 C72.2799614,66.3359375 74.5260327,66.0511096 76.3164062,65.4814453 C78.1067798,64.911781 79.9052644,64.106125 81.7119141,63.0644531 C83.5185637,62.0227812 85.2600828,60.7858145 86.9365234,59.3535156 C88.6129641,57.9212168 90.102207,56.3261807 91.4042969,54.5683594 C94.2363423,50.7271943 95.6523438,47.0813975 95.6523438,43.6308594 C95.6523438,40.1803213 94.8629636,37.4541116 93.2841797,35.4521484 C91.7053958,33.4501853 89.6790488,31.8470112 87.2050781,30.6425781 C82.5501069,28.3313687 76.8047217,27.1757812 69.96875,27.1757812 C64.0767935,27.1757812 58.0547183,28.3639204 51.9023438,30.7402344 C47.6054473,32.4329512 44.5130303,34.5813672 42.625,37.1855469 C41.6484326,38.5527412 41.1601562,40.0501221 41.1601562,41.6777344 C41.1601562,45.3561382 42.5273301,48.4485552 45.2617188,50.9550781 Z M27,96.7558594 C28.6601646,94.9980381 30.61327,91.9463108 32.859375,87.6005859 C35.10548,83.2548611 37.0260337,79.4869951 38.6210938,76.296875 C40.2161538,73.1067549 41.8844314,69.8353032 43.6259766,66.4824219 C45.3675217,63.1295405 47.1578684,59.8011233 48.9970703,56.4970703 C50.8362722,53.1930173 52.6998604,50.0761865 54.5878906,47.1464844 C58.7871304,40.7011396 62.6282378,36.1764453 66.1113281,33.5722656 C66.5019551,33.2467432 66.9332659,33.0839844 67.4052734,33.0839844 C67.877281,33.0839844 68.3574194,33.1653638 68.8457031,33.328125 C69.9199272,33.6861997 70.8639282,34.2395796 71.6777344,34.9882812 C67.6087036,38.2435059 63.4095269,46.7883423 59.0800781,60.6230469 C57.8430928,64.4967642 56.6386777,68.3622854 55.4667969,72.2197266 C54.294916,76.0771677 53.1637424,79.7962061 52.0732422,83.3769531 C50.9827419,86.9577002 49.900396,90.1152207 48.8261719,92.8496094 C46.5149624,98.8717749 44.4479258,101.882812 42.625,101.882812 C36.8632524,101.882812 32.354834,100.710949 29.0996094,98.3671875 C28.2858032,97.7812471 27.5859404,97.2441431 27,96.7558594 Z" id="P" fill="#193438" />
              </g>
            </svg>
          </Header>
          <Menu
            theme="dark"
            mode="inline"
            style={{ borderRight: 0 }}
            defaultSelectedKeys={[selected]}
          >
            <Menu.Item
              key="documents"
              onClick={() => history.push('/documents')}
            >
              <Icon type="file" />
              <span>Documents</span>
            </Menu.Item>
            <Menu.Item
              key="schemas"
              onClick={() => history.push('/schemas')}
            >
              <Icon type="database" />
              <span>Schemas</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout>
          <Content style={{ flex: 1 }}>
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
    );
  }} />
);