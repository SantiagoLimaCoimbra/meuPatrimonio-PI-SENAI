package patrimoniumsenai.apipatrimonium.asset;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AssetRepository extends JpaRepository<Asset, Long> {
    @Query("SELECT a FROM Asset a ORDER BY id_asset DESC")
    List<Asset> findAllOrderByDesc();
}
