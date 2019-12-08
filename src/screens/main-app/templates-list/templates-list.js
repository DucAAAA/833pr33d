import React from "react"
import { connect } from "react-redux"
import { compose, lifecycle, withState } from "recompose"
import { withTranslation } from "react-i18next"
import InfiniteScroll from "react-infinite-scroll-component"

import { dashboardSelector } from "selectors/dashbroad-selector"
import { getDashboardAction, resetDashboardState } from "actions/dashboard.action"

import Navigation from "components/navigation"
import FileManager from "components/file-manager"

let page = 0;
const TemplateList = (props) => {
  console.log('first', props)
  return (
    <React.Fragment>
      <Navigation />
      <InfiniteScroll
        dataLength={props.list.length}
        next={() => props.getDashboardAction({page: page++})}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <FileManager firstRender={props.firstRender} recentTemplates={props.recent_templates} list={props.list}/>
      </InfiniteScroll>
    </React.Fragment>
  )
}

export default compose(
  withTranslation("dashboard"),
  connect(dashboardSelector, { getDashboardAction, resetDashboardState }),
  lifecycle({
    componentDidMount() {
      console.log('component')
      this.props.resetDashboardState();
      this.props.getDashboardAction({page: page++})
    }
  })
)(TemplateList)
