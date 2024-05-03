<template>
  <div class="p-4 grid justify-items-center gap-4">
    <div class="overflow-x-auto flex flex-col gap-4">
      <!-- Title & Search area -->
      <div class="flex flex-row justify-items-end">
        <h2 class="flex-none text-2xl rounded-box btn btn-outline p-2">商品查詢</h2>
        <div class="flex-1"></div>
        <div class="flex-none form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <!-- Table -->
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>品牌</th>
            <th>品名</th>
            <th>品號</th>
            <th>顏色</th>
            <th>材質</th>
            <th>數量</th>
            <th>成色</th>
            <th>售價</th>
            <th>成本</th>
            <th>備註</th>
            <th>編輯/出庫</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <!-- check box -->
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <!-- 品牌 -->
            <td>CHANEL</td>
            <!-- 品名 -->
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="/assets/images/CHANEL.PNG"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    Chanel 金雙C羊皮菱格紋WOC鍊帶斜背包
                  </div>
                  <div class="text-sm opacity-50">地點：倉庫</div>
                </div>
              </div>
            </td>
            <!-- 品號 -->
            <td>
              CH2405001
              <br />
              <span class="badge badge-ghost badge-sm">內碼：xxxxxxx</span>
            </td>

            <!-- 顏色 -->
            <td>黑色</td>

            <!-- 材質 -->
            <td>羊皮</td>

            <!-- 數量 -->
            <td>1</td>

            <!-- 成色 -->
            <td>A</td>

            <!-- 售價 -->
            <td>128,000</td>

            <!-- 成本 -->
            <td>80,000</td>
            <!-- 備註 -->
            <td></td>
            <!-- 編輯/出庫 -->
            <td>
              <button class="btn btn-neutral">編輯</button>&nbsp
              <button class="btn btn-accent">出庫</button>
            </td>
          </tr>

          <!-- row 2 -->
          <tr>
            <!-- check box -->
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <!-- 品牌 -->
            <td>CELINE</td>
            <!-- 品名 -->
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="/assets/images/CELINE.PNG"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    Celine Cladet Triomphe 印花帆布肩背包
                  </div>
                  <div class="text-sm opacity-50">地點：倉庫</div>
                </div>
              </div>
            </td>
            <!-- 品號 -->
            <td>
              CE2405002
              <br />
              <span class="badge badge-ghost badge-sm">內碼：xxxxxxx</span>
            </td>

            <!-- 顏色 -->
            <td>黃褐色</td>

            <!-- 材質 -->
            <td>牛皮</td>

            <!-- 數量 -->
            <td>1</td>

            <!-- 成色(S/SA/A/AB/B) -->
            <td>S</td>

            <!-- 售價 -->
            <td>88,000</td>

            <!-- 成本 -->
            <td>46,000</td>

            <!-- 備註 -->
            <td></td>

            <!-- 編輯/出庫 -->
            <td>
              <button class="btn btn-neutral">編輯</button>&nbsp
              <button class="btn btn-accent">出庫</button>
            </td>
          </tr>

          <!-- row 3 -->
          <tr>
            <!-- check box -->
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <!-- 品牌 -->
            <td>Fendi</td>
            <!-- 品名 -->
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="/assets/images/FENDI.PNG"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    Fendi Step Out 草編拚帆布二用手提肩背水桶包
                  </div>
                  <div class="text-sm opacity-50">地點：倉庫</div>
                </div>
              </div>
            </td>
            <!-- 品號 -->
            <td>
              FD2405003
              <br />
              <span class="badge badge-ghost badge-sm">內碼：xxxxxxx</span>
            </td>

            <!-- 顏色 -->
            <td>老花/米色</td>

            <!-- 材質 -->
            <td>草編/帆布</td>

            <!-- 數量 -->
            <td>1</td>

            <!-- 成色 -->
            <td>A</td>

            <!-- 售價 -->
            <td>49,800</td>

            <!-- 成本 -->
            <td>30,000</td>
            <!-- 備註 -->
            <td></td>
            <!-- 編輯/出庫 -->
            <td>
              <button class="btn btn-neutral">編輯</button>&nbsp
              <button class="btn btn-accent">出庫</button>
            </td>
          </tr>

          <!-- row 4 -->
          <tr>
            <!-- check box -->
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <!-- 品牌 -->
            <td>Hermes</td>
            <!-- 品名 -->
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="/assets/images/HERMES.PNG"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    Hermes Mini Evelyne 16cm 金釦斜背包
                  </div>
                  <div class="text-sm opacity-50">地點：倉庫</div>
                </div>
              </div>
            </td>
            <!-- 品號 -->
            <td>
              HM2405004
              <br />
              <span class="badge badge-ghost badge-sm">內碼：xxxxxxx</span>
            </td>

            <!-- 顏色 -->
            <td>餅乾色</td>

            <!-- 材質 -->
            <td>牛皮</td>

            <!-- 數量 -->
            <td>1</td>

            <!-- 成色 -->
            <td>SA</td>

            <!-- 售價 -->
            <td>113,000</td>

            <!-- 成本 -->
            <td>100,000</td>
            <!-- 備註 -->
            <td></td>
            <!-- 編輯/出庫 -->
            <td>
              <button class="btn btn-neutral">編輯</button>&nbsp
              <button class="btn btn-accent">出庫</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="join grid grid-cols-2 w-64">
      <button class="join-item btn btn-outline">Previous page</button>
      <button class="join-item btn btn-outline">Next</button>
    </div>
  </div>
</template>

<script></script>
