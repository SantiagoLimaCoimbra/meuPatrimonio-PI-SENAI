package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.area.*;

import java.util.List;

@RestController
@RequestMapping("areas")
public class AreaController {

    @Autowired
    private AreaRepository repository;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateAreaDTO data){
        repository.save(new Area(data));
    }

    @GetMapping
    public List<ReadAreaDTO> read(){
        return repository.findAll().stream().map(ReadAreaDTO::new).toList();
    }

    @GetMapping("/{id_area}")
    public ResponseEntity<?> readId(@PathVariable Long id_area){
        Area area = repository.findById(id_area).get();
        return ResponseEntity.ok(area);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid UpdateAreaDTO data){
        var area = repository.getReferenceById(data.id_area());
        area.updateInfo(data);
    }

    @DeleteMapping("/{id_area}")
    @Transactional
    public void delet(@PathVariable Long id_area){
        repository.deleteById(id_area);
    }

}
