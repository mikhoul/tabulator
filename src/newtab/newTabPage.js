import React from 'react';

import * as api from 'src/common/api';
import * as messages from 'src/common/messages';
import SearchFilter from 'src/newtab/searchFilter';
import TabList from 'src/newtab/tabList';

import './newTabPage.less';

export default class NewTabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      tabs: [],
    };
  }

  componentWillMount() {
    const messageNameToCallback = {};
    messageNameToCallback[messages.TAB_IMAGE_CAPTURED] = this.refreshTabs;
    api.attachMessageListeners(messageNameToCallback);
    this.refreshTabs();
  }

  refreshTabs = () => {
    api.getCurrentWindowId().then(id => {
      const tabs = api.getAllTabs().filter(t => t.windowId === id);
      this.setState({tabs});
    });
  };

  render() {
    const filteredTabs = this.state.tabs.filter(t => this.state.filter === ''
      || t.title.includes(this.state.filter) || t.url.includes(this.state.filter));
    return (
      <div className="Component-NewTabPage">
        <h1>{'Tabulator'}</h1>
        <SearchFilter
          changeCallback={v => this.setState({filter: v})}
          filter={this.state.filter}
        />
        <TabList
          clickCallback={tabId => api.fireMessage(messages.GO_TO_TAB, tabId)}
          tabs={filteredTabs}
        />
      </div>
    );
  }
}
