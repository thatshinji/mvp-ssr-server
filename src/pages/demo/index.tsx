import React, { FC, Fragment } from "react";
import { connect } from "react-redux";
import { getDemoData} from "../../store/demoReduce";
import { Helmet } from "react-helmet";

type DemoType = {
  content?: string
  getDemoData?: (data: string) => void
}

const Demo: FC<DemoType> = (data) => {
  return (
    <Fragment>
      <Helmet>
        <title>demo</title>
        <meta name='demo' content='server side rendered'></meta>
      </Helmet>
      <div>
        <h1>{data.content}</h1>
        <button onClick={() => {
          data.getDemoData && data.getDemoData('data after refreshed')
        }}>
          refresh
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    content: state?.demo?.content
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDemoData: (data: string) => {
      dispatch(getDemoData(data))
    }
  }
}

const storeDemo = connect(mapStateToProps, mapDispatchToProps)(Demo)

export default storeDemo

