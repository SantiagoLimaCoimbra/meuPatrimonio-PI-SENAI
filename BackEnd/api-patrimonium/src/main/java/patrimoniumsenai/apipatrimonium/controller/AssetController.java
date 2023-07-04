package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.asset.*;

import java.util.List;

@RestController
@RequestMapping("assets")
public class AssetController {

    @Autowired
    private AssetRepository repository;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateAssetDTO data){
        repository.save(new Asset(data));
    }

    @GetMapping
    public List<ReadAssetDTO> read(){
        return repository.findAllOrderByDesc().stream().map(ReadAssetDTO::new).toList();
    }

    @GetMapping("/{id_asset}")
    public ResponseEntity<?> readId(@PathVariable Long id_asset){
        Asset asset = repository.findById(id_asset).get();
        return ResponseEntity.ok(asset);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid UpdateAssetDTO data){
        var asset = repository.getReferenceById(data.id_asset());
        asset.updateInfo(data);
    }

    @DeleteMapping("/{id_asset}")
    @Transactional
    public void delet(@PathVariable Long id_asset){
        repository.deleteById(id_asset);
    }

}
