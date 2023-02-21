import * as React from "react"
import Layout from "../components/layout"

const InquirePage = () => (
  <Layout>
    <div className="row justify-content-center">
      <div className="col-4">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default InquirePage
