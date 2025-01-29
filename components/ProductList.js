import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import styles from "./ProductList.module.css";

export default function ProductList({ className = "", products }) {
  return (
    <ul className={`${styles.productList} ${className}`}>
      {products?.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/items/${product.id}`}>
            <div className={styles.image}>
              {/*
                next의 이미지 컴포넌트를 쓰면 주소 url을 바꿔줌.
                주소를 통해 이미지를 가져오면 넥스트 js 서버를 한번 거쳐서 최적화된 이미지를 가져온다.
                또한 꼭 레이지 로딩을 지원하기 때문에 꼭 필요할때 로딩을 시작한다.
                크기로 최적화하기 때문에 크기를 꼭 지정해야한다.
                fill의 경우 포지셔닝이된 조상 요소로 크기를 지정할 수 있다.
                fill의 경우 이미지가 망가질 수 있기 때문에 비율을 정하기 위해선 objectFit을 사용한다.
                */}
              <Image fill src={product.imgUrl} alt={product.name} />
            </div>
            <div className={styles.content}>
              <div>
                <span className={styles.name}>{product.name}</span>
                <div className={styles.prices}>
                  <span className={styles.originalPrice}>
                    {product.price.toLocaleString()}원
                  </span>
                  {product.salePrice.toLocaleString()}원
                </div>
              </div>
              <hr className={styles.divider} />
              <div>
                <div className={styles.starRating}>
                  <StarRating value={product.starRating} />
                  {product.starRatingCount.toLocaleString()}
                </div>
                <div className={styles.likeCount}>
                  ♥{product.likeCount.toLocaleString()}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
