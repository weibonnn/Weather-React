import"./App.css"
import { IoUmbrella } from "react-icons/io5";


function App() {

  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一列兩欄 */}
        <div className="row">
          {/* 第一欄 */}
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 第二欄 */}
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00
                    </p>
                    <p>
                      <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>情時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
