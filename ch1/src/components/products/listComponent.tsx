import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/pageComponent";


function ListComponent({ serverData }: { serverData: PageResponseDTO<ProductDTO> }) {
  const { moveToRead, moveToList } = useCustomMove();

  return (
    <div className="border-2 border-blue-100 mt-10 mx-2 text-2xl">
      <div className="flex flex-wrap mx-auto p-6 bg-white">
        {serverData.dtoList.map((product) => {
          const firstImage = product.uploadFileNames?.[0];

          return (
            <div
              key={product.pno}
              className="w-1/2 p-1 rounded shadow-md border-2 border-gray-200 cursor-pointer hover:shadow-lg transition"
              onClick={() => moveToRead(product.pno)}
            >
              <div className="flex flex-col h-full">
                {/* 상품 번호 */}
                <div className="font-extrabold text-2xl p-2">{product.pno}</div>

                {/* 이미지 */}
                <div className="w-full overflow-hidden flex justify-center">
                  {firstImage ? (
                    <img
                      alt={product.pname}
                      className="rounded-md w-60"
                      src={`http://localhost:8080/api/products/view/s_${firstImage}`}
                    />
                  ) : (
                    <div className="w-60 h-40 flex items-center justify-center bg-gray-100 text-gray-500">
                      이미지 없음
                    </div>
                  )}
                </div>

                {/* 상품 정보 */}
                <div className="mt-auto font-extrabold bg-white">
                  <div className="text-center p-1">이름: {product.pname}</div>
                  <div className="text-center p-1">가격: {product.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 페이지네이션 */}
      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
}

export default ListComponent;
