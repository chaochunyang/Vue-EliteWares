<template>
  <div class="container p-4 mx-auto">
    <div class="flex flex-col gap-4">
      <!-- Title & Search area -->
      <div class="flex flex-row justify-items-end">
        <h2
          class="flex-none text-2xl rounded-box btn btn-outline btn-secondary p-2"
        >
          商品查詢
        </h2>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            class="border-b transition duration-300 ease-in-out hover:bg-gray-100 group"
          >
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
              <button
                class="btn btn-primary showBtn group-hover:visible"
                onclick="editModal.showModal()"
              >
                編輯</button
              >&nbsp
              <button class="btn btn-accent showBtn group-hover:visible">
                出庫
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      <!-- Open the editModal using .showModal() method -->
      <!-- You can open the modal using ID.showModal() method -->
      <dialog id="editModal" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div class="grid grid-cols-2 gap-4 ">
            <div class="grid gap-4 p-4">
              <h3 class="font-bold text-3xl">編輯商品</h3>
              <div class="grid grid-flow-col gap-2">
                <button class="btn btn-primary">編輯</button>
                <button class="btn btn-accent">刪除</button>
                <button class="btn btn-outline">歷史庫存</button>
              </div>
              <div class="grid grid-flow-row gap-2">
                <input type="text" class="input input-bordered w-24 md:w-auto" placeholder="品號">
                <input type="text" class="input input-bordered w-24 md:w-auto" placeholder="品牌">
                <input type="text" class="input input-bordered w-24 md:w-auto" placeholder="品名">
              </div>
            </div>

            <div>
              <div class="w-30 h-50 bg-black">123</div>
            </div>
          </div>
          <!-- <div class="grid grid-flow-col gap-2 w-6/12">
            <button class="btn btn-outlin hover:btn-accent">刪除</button>
            <button class="btn btn-primary">新增</button>
          </div> -->
        </div>
      </dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  name: "default",
  components: { Pagination },
};
</script>

<style>
.showBtn {
  visibility: hidden;
}

group-hover:visible {
  transition: all 3s ease-in-out;
}
</style>
